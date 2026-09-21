"use strict";

/* =====================================================
   DADOS DAS EXPERIÊNCIAS

   PARA TROCAR AS IMAGENS:
   Altere os endereços dentro de images: [ ... ].
   Você pode usar arquivos locais, por exemplo:
   "/assets/experiencias/monumental-1.jpg"
===================================================== */

const experiencesData = {
    monumental: {
        category: "Roteiro · Arquitetura e história",
        title: "Brasília Monumental",
        address: "Eixo Monumental, Brasília - DF",
        description:
            "Um percurso pelos principais símbolos da capital. A experiência reúne arquitetura modernista, história, espaços públicos e algumas das obras mais conhecidas de Oscar Niemeyer.",
        duration: "3 a 4 horas",
        time: "Manhã ou fim da tarde",
        price: "Gratuito",
        audience: "Todas as idades",
        highlights: [
            "Catedral Metropolitana de Brasília",
            "Congresso Nacional e Praça dos Três Poderes",
            "Museu Nacional e Biblioteca Nacional",
            "Paradas para fotografias e contemplação"
        ],
        route:
            "https://www.google.com/maps/search/Eixo+Monumental+Brasília",
        images: [
            "https://mediaassets.cbre.com/-/media/project/cbre/shared-site/latam/brazil/brasilia-752x.jpg",
            "/assets/palacio-alvorada.jpg",
            "/assets/img-sobre.png",
            "https://www.viajenaviagem.com/wp-content/uploads/2014/04/brasilia-ponte-jk-1920x640-1.jpg"
        ]
    },

    "por-do-sol": {
        category: "Experiência · Natureza",
        title: "Pôr do sol no Lago Sul",
        address: "Orla da Ponte JK, Lago Sul, Brasília - DF",
        description:
            "Uma experiência tranquila para contemplar o céu de Brasília refletido no Lago Paranoá. O roteiro combina caminhada pela orla, paisagem, gastronomia e um dos melhores horários para fotografar a Ponte JK.",
        duration: "1 a 2 horas",
        time: "Das 17h às 19h",
        price: "Gratuito",
        audience: "Casais, amigos e famílias",
        highlights: [
            "Vista privilegiada da Ponte JK",
            "Caminhada pela orla do Lago Paranoá",
            "Espaços para fotografia e descanso",
            "Restaurantes e cafés próximos"
        ],
        route:
            "https://www.google.com/maps/search/Ponte+JK+Brasília",
        images: [
            "https://www.viajenaviagem.com/wp-content/uploads/2014/04/brasilia-ponte-jk-1920x640-1.jpg",
            "/assets/img-sobre.png",
            "/assets/restaurante-3.jpg",
            "/assets/palacio-alvorada.jpg"
        ]
    },

    "depois-das-seis": {
        category: "Evento · Cultura e gastronomia",
        title: "Brasília depois das seis",
        address: "Plano Piloto, Brasília - DF",
        description:
            "Uma seleção de experiências para descobrir Brasília quando a cidade acende. Música, exposições, bares, restaurantes e encontros culturais formam um roteiro noturno diverso e contemporâneo.",
        duration: "Noite livre",
        time: "A partir das 18h",
        price: "Varia conforme o local",
        audience: "Adultos",
        highlights: [
            "Programação cultural e apresentações",
            "Gastronomia em diferentes regiões",
            "Bares, cafés e espaços de convivência",
            "Sugestões atualizadas de eventos"
        ],
        route:
            "https://www.google.com/maps/search/vida+noturna+Brasília",
        images: [
            "/assets/images (1).jpg",
            "/assets/images.jpg",
            "/assets/restaurante-3.jpg",
            "https://www.viajenaviagem.com/wp-content/uploads/2014/04/brasilia-ponte-jk-1920x640-1.jpg"
        ]
    }
};

const experienceModal = document.querySelector("#experience-modal");
const experienceDialog = experienceModal?.querySelector(".experience-dialog");
const experienceClose = experienceModal?.querySelector(".experience-close");
const experienceMainImage = document.querySelector("#experience-main-image");
const experienceThumbnails = document.querySelector("#experience-thumbnails");
const galleryCounter = document.querySelector("#gallery-counter");
const galleryPrev = experienceModal?.querySelector(".gallery-prev");
const galleryNext = experienceModal?.querySelector(".gallery-next");
const experienceFavorite = experienceModal?.querySelector(".experience-favorite");
const experienceShare = experienceModal?.querySelector(".experience-share");

let currentExperience = null;
let currentImageIndex = 0;
let lastFocusedElement = null;

function fillText(selector, text) {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
}

function showExperienceImage(index) {
    if (!currentExperience || !experienceMainImage) return;

    const total = currentExperience.images.length;
    currentImageIndex = (index + total) % total;

    /* Reinicia a pequena animação ao trocar a fotografia. */
    experienceMainImage.style.animation = "none";
    experienceMainImage.offsetHeight;
    experienceMainImage.style.animation = "";

    experienceMainImage.src = currentExperience.images[currentImageIndex];
    experienceMainImage.alt = `${currentExperience.title}, imagem ${currentImageIndex + 1}`;

    if (galleryCounter) {
        galleryCounter.textContent = `${currentImageIndex + 1} / ${total}`;
    }

    document.querySelectorAll(".experience-thumbnail").forEach((button, buttonIndex) => {
        const active = buttonIndex === currentImageIndex;
        button.classList.toggle("active", active);
        button.setAttribute("aria-current", active ? "true" : "false");
    });
}

function createThumbnails(experience) {
    if (!experienceThumbnails) return;

    experienceThumbnails.innerHTML = "";

    experience.images.forEach((image, index) => {
        const button = document.createElement("button");
        const thumbnail = document.createElement("img");

        button.type = "button";
        button.className = "experience-thumbnail";
        button.setAttribute("aria-label", `Ver imagem ${index + 1}`);

        thumbnail.src = image;
        thumbnail.alt = "";

        button.appendChild(thumbnail);
        button.addEventListener("click", () => showExperienceImage(index));

        experienceThumbnails.appendChild(button);
    });
}

function fillHighlights(items) {
    const list = document.querySelector("#experience-highlights");
    if (!list) return;

    list.innerHTML = "";

    items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

function openExperienceModal(experienceId, trigger) {
    const experience = experiencesData[experienceId];

    if (!experience || !experienceModal) return;

    currentExperience = experience;
    currentImageIndex = 0;
    lastFocusedElement = trigger;

    fillText("#experience-category", experience.category);
    fillText("#experience-modal-title", experience.title);
    fillText("#experience-address", experience.address);
    fillText("#experience-description", experience.description);
    fillText("#experience-duration", experience.duration);
    fillText("#experience-time", experience.time);
    fillText("#experience-price", experience.price);
    fillText("#experience-audience", experience.audience);

    fillHighlights(experience.highlights);
    createThumbnails(experience);
    showExperienceImage(0);

    const route = document.querySelector("#experience-route");
    if (route) route.href = experience.route;

    if (experienceFavorite) {
        experienceFavorite.classList.remove("selected");
        experienceFavorite.textContent = "♡";
        experienceFavorite.setAttribute("aria-label", "Adicionar experiência aos favoritos");
    }

    experienceModal.classList.add("active");
    experienceModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("experience-modal-open");

    setTimeout(() => experienceClose?.focus(), 100);
}

function closeExperienceModal() {
    if (!experienceModal) return;

    experienceModal.classList.remove("active");
    experienceModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("experience-modal-open");

    lastFocusedElement?.focus();
}

document.querySelectorAll("[data-experience]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
        event.preventDefault();
        openExperienceModal(trigger.dataset.experience, trigger);
    });
});

experienceClose?.addEventListener("click", closeExperienceModal);

experienceModal?.addEventListener("click", (event) => {
    if (event.target === experienceModal) closeExperienceModal();
});

galleryPrev?.addEventListener("click", () => {
    showExperienceImage(currentImageIndex - 1);
});

galleryNext?.addEventListener("click", () => {
    showExperienceImage(currentImageIndex + 1);
});

experienceFavorite?.addEventListener("click", () => {
    const selected = experienceFavorite.classList.toggle("selected");

    experienceFavorite.textContent = selected ? "♥" : "♡";
    experienceFavorite.setAttribute(
        "aria-label",
        selected ? "Remover experiência dos favoritos" : "Adicionar experiência aos favoritos"
    );
});

experienceShare?.addEventListener("click", async () => {
    if (!currentExperience) return;

    const shareData = {
        title: currentExperience.title,
        text: `Confira esta experiência no GPS Brasília: ${currentExperience.title}`,
        url: window.location.href
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (error) {
            /* O usuário pode cancelar o compartilhamento. */
        }
        return;
    }

    try {
        await navigator.clipboard.writeText(window.location.href);
        experienceShare.textContent = "Link copiado";

        setTimeout(() => {
            experienceShare.textContent = "Compartilhar";
        }, 1800);
    } catch (error) {
        experienceShare.textContent = "Copie o endereço da página";
    }
});

document.addEventListener("keydown", (event) => {
    const modalOpen = experienceModal?.classList.contains("active");
    if (!modalOpen) return;

    if (event.key === "Escape") closeExperienceModal();
    if (event.key === "ArrowLeft") showExperienceImage(currentImageIndex - 1);
    if (event.key === "ArrowRight") showExperienceImage(currentImageIndex + 1);
});

/* Mantém o foco dentro do modal enquanto ele está aberto. */

experienceDialog?.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    const focusable = experienceDialog.querySelectorAll(
        "button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])"
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
});
