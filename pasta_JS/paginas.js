"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const open = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.textContent = open ? "×" : "☰";
    });
}

const profileMenu = document.querySelector(".profile-menu");
const profileTrigger = document.querySelector(".profile-trigger");
const profileDropdown = document.querySelector("#profile-dropdown");

function closeProfileMenu() {
    if (!profileTrigger || !profileDropdown) return;
    profileDropdown.hidden = true;
    profileTrigger.setAttribute("aria-expanded", "false");
}

if (profileTrigger && profileDropdown) {
    profileTrigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const willOpen = profileDropdown.hidden;
        profileDropdown.hidden = !willOpen;
        profileTrigger.setAttribute("aria-expanded", String(willOpen));
    });

    document.addEventListener("click", (event) => {
        if (profileMenu && !profileMenu.contains(event.target)) closeProfileMenu();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeProfileMenu();
    });
}

const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

const favoritesGrid = document.querySelector("#favorites-grid");
const favoritesEmpty = document.querySelector("#favorites-empty");
const favoriteCount = document.querySelector("#favorite-count");

function updateFavoriteCount() {
    if (!favoritesGrid || !favoriteCount || !favoritesEmpty) return;
    const total = favoritesGrid.querySelectorAll("[data-favorite-card]").length;
    favoriteCount.textContent = String(total);
    favoritesGrid.hidden = total === 0;
    favoritesEmpty.hidden = total !== 0;
}

document.querySelectorAll(".favorite-remove").forEach((button) => {
    button.addEventListener("click", () => {
        const card = button.closest("[data-favorite-card]");
        if (!card) return;
        card.remove();
        updateFavoriteCount();
        showToast("Local removido dos favoritos.");
    });
});

const accountForm = document.querySelector("#account-form");

if (accountForm) {
    accountForm.addEventListener("submit", (event) => {
        event.preventDefault();
        showToast("Alterações salvas nesta demonstração.");
    });
}

const recommendationForm = document.querySelector("#recommendation-form");
const recommendationSuccess = document.querySelector("#recommendation-success");
const imageInput = document.querySelector("#place-image-input");
const imagePreview = document.querySelector("#image-preview");
const previewImage = imagePreview?.querySelector("img");
const removePreview = document.querySelector("#remove-preview");
const newRecommendation = document.querySelector("#new-recommendation");

if (imageInput && imagePreview && previewImage) {
    imageInput.addEventListener("change", () => {
        const file = imageInput.files?.[0];
        if (!file) return;
        previewImage.src = URL.createObjectURL(file);
        imagePreview.hidden = false;
    });
}

if (removePreview && imageInput && imagePreview && previewImage) {
    removePreview.addEventListener("click", () => {
        if (previewImage.src) URL.revokeObjectURL(previewImage.src);
        previewImage.removeAttribute("src");
        imageInput.value = "";
        imagePreview.hidden = true;
    });
}

if (recommendationForm && recommendationSuccess) {
    recommendationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const fields = recommendationForm.querySelectorAll("input[required], select[required], textarea[required]");
        let valid = true;

        fields.forEach((field) => {
            const fieldValid = field.checkValidity();
            field.classList.toggle("invalid", !fieldValid);
            if (!fieldValid) valid = false;
        });

        if (!valid) {
            showToast("Preencha os campos obrigatórios corretamente.");
            recommendationForm.querySelector(":invalid")?.focus();
            return;
        }

        recommendationForm.hidden = true;
        recommendationSuccess.hidden = false;
        recommendationSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}

if (newRecommendation && recommendationForm && recommendationSuccess) {
    newRecommendation.addEventListener("click", () => {
        recommendationForm.reset();
        recommendationForm.querySelectorAll(".invalid").forEach((field) => field.classList.remove("invalid"));
        if (imagePreview) imagePreview.hidden = true;
        recommendationSuccess.hidden = true;
        recommendationForm.hidden = false;
    });
}
