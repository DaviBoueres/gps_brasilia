"use strict";

/*
    TODOS OS CONTEÚDOS DAS CATEGORIAS FICAM AQUI.
    Para trocar uma imagem, altere somente o endereço dentro de images.
*/
const exploreData = {
    gastronomia: {
        title: "Gastronomia",
        description: "Sabores, encontros e experiências gastronômicas em diferentes regiões de Brasília.",
        filters: ["Todos", "Restaurantes", "Cafés", "Comida regional"],
        places: [
            place("Sabores de Brasília", "Asa Sul", "Restaurantes", "Culinária afetiva e ingredientes do Cerrado.", "$$", "https://www.google.com/maps/search/restaurantes+Asa+Sul+Brasília", img("1517248135467-4c7edcad34c4"), img("1552566626-52f8b828add9")),
            place("Café do Cerrado", "Asa Norte", "Cafés", "Cafés especiais e confeitaria artesanal.", "$", "https://www.google.com/maps/search/cafés+Asa+Norte+Brasília", img("1501339847302-ac426a4a7cbb"), img("1495474472287-4d71bcdd2085")),
            place("Feira da Torre", "Eixo Monumental", "Comida regional", "Comidas típicas, artesanato e tradição brasiliense.", "$", "https://www.google.com/maps/search/Feira+da+Torre+Brasília", img("1555939594-58d7cb561ad1"), img("1504674900247-0877df9cc836"))
        ]
    },
    lazer: {
        title: "Lazer ao ar livre",
        description: "Parques, trilhas, água e paisagens para aproveitar o céu aberto de Brasília.",
        filters: ["Todos", "Parques", "Água", "Trilhas"],
        places: [
            place("Parque da Cidade", "Plano Piloto", "Parques", "Pistas, áreas verdes e espaços para esporte e descanso.", "Grátis", "https://www.google.com/maps/search/Parque+da+Cidade+Brasília", img("1500530855697-b586d89ba3ee"), img("1501785888041-af3ef285b470")),
            place("Stand up no Lago", "Lago Paranoá", "Água", "Uma nova perspectiva da cidade sobre as águas do lago.", "$$", "https://www.google.com/maps/search/stand+up+paddle+Lago+Paranoá", img("1530053969600-caed2596d242"), img("1507525428034-b723cf961d3e")),
            place("Jardim Botânico", "Lago Sul", "Trilhas", "Trilhas interpretativas e contato com o Cerrado.", "$", "https://www.google.com/maps/search/Jardim+Botânico+de+Brasília", img("1441974231531-c6227db76b6e"), img("1501854140801-50d01698950b"))
        ]
    },
    cultura: {
        title: "Cultura",
        description: "Museus, cinema, arte e espaços que movimentam a produção cultural da capital.",
        filters: ["Todos", "Museus", "Cinema", "Exposições"],
        places: [
            place("CCBB Brasília", "Setor de Clubes Sul", "Exposições", "Arte, teatro, música e cinema em programação contínua.", "Varia", "https://www.google.com/maps/search/CCBB+Brasília", img("1549490349-8643362247b5"), img("1561214115-f2f134cc4912")),
            place("Museu Nacional", "Esplanada", "Museus", "Exposições e arquitetura no coração monumental.", "Grátis", "https://www.google.com/maps/search/Museu+Nacional+da+República", img("1564399579883-451a5d44ec08"), img("1554907984-15263bfd63bd")),
            place("Cine Brasília", "Asa Sul", "Cinema", "Cinema brasileiro, festivais e memória audiovisual.", "$", "https://www.google.com/maps/search/Cine+Brasília", img("1489599849927-2ee91cede3ba"), img("1485846234645-a62644f84728"))
        ]
    },
    arquitetura: {
        title: "Arquitetura",
        description: "Linhas, curvas e monumentos que fizeram de Brasília uma referência mundial.",
        filters: ["Todos", "Niemeyer", "Monumentos", "Pontes"],
        places: [
            place("Catedral Metropolitana", "Eixo Monumental", "Niemeyer", "Uma das obras mais reconhecidas da capital.", "Grátis", "https://www.google.com/maps/search/Catedral+Metropolitana+de+Brasília", img("1487958449943-2429e8be8625"), img("1497366754035-f200968a6e72")),
            place("Congresso Nacional", "Praça dos Três Poderes", "Monumentos", "Símbolo político e arquitetônico do Brasil.", "Grátis", "https://www.google.com/maps/search/Congresso+Nacional+Brasília", img("1494526585095-c41746248156"), img("1486406146926-c627a92ad1ab")),
            place("Ponte JK", "Lago Sul", "Pontes", "Curvas monumentais sobre o Lago Paranoá.", "Grátis", "https://www.google.com/maps/search/Ponte+JK+Brasília", img("1511818966892-d7d671e672a2"), img("1470770841072-f978cf4d019e"))
        ]
    },
    compras: {
        title: "Compras",
        description: "Shoppings, feiras e mercados para encontrar moda, artesanato e sabores locais.",
        filters: ["Todos", "Shoppings", "Feiras", "Mercados"],
        places: [
            place("Conjunto Nacional", "Setor de Diversões Norte", "Shoppings", "Compras e serviços no centro da cidade.", "Livre", "https://www.google.com/maps/search/Conjunto+Nacional+Brasília", img("1441986300917-64674bd600d8"), img("1555529669-e69e7aa0ba9a")),
            place("Feira da Torre", "Eixo Monumental", "Feiras", "Artesanato, lembranças e culinária regional.", "Livre", "https://www.google.com/maps/search/Feira+da+Torre+Brasília", img("1488459716781-31db52582fe9"), img("1528698827591-e19ccd7bc23d")),
            place("Mercado Mané", "Arena BRB", "Mercados", "Gastronomia, produtos e convivência em ambiente contemporâneo.", "Livre", "https://www.google.com/maps/search/Mercado+Mané+Brasília", img("1533900298318-6b8da08a523e"), img("1556742049-0cfed4f6a45d"))
        ]
    },
    "vida-noturna": {
        title: "Vida noturna",
        description: "Música, gastronomia e encontros para descobrir Brasília depois das seis.",
        filters: ["Todos", "Bares", "Música", "Gastronomia"],
        places: [
            place("Noite na Asa Norte", "Asa Norte", "Bares", "Bares tradicionais e novos encontros pela cidade.", "$$", "https://www.google.com/maps/search/bares+Asa+Norte+Brasília", img("1514525253161-7a46d19cd819"), img("1572116469696-31de0f17cc34")),
            place("Música no Plano", "Plano Piloto", "Música", "Casas de show e apresentações para diferentes públicos.", "$$", "https://www.google.com/maps/search/música+ao+vivo+Brasília", img("1501386761578-eac5c94b800a"), img("1524368535928-5b5e00ddc76b")),
            place("Pontão à noite", "Lago Sul", "Gastronomia", "Restaurantes e paisagem iluminada junto ao lago.", "$$$", "https://www.google.com/maps/search/Pontão+do+Lago+Sul", img("1515003197210-e0cd71810b5f"), img("1519671482749-fd09be7ccebf"))
        ]
    },
    historia: {
        title: "História",
        description: "Lugares que preservam a construção, a memória e as transformações da capital.",
        filters: ["Todos", "Memoriais", "Museus", "Pioneiros"],
        places: [
            place("Memorial JK", "Eixo Monumental", "Memoriais", "Acervo dedicado a Juscelino Kubitschek e à construção da capital.", "$", "https://www.google.com/maps/search/Memorial+JK", img("1564981797816-1043664bf78d"), img("1580136579312-94651dfd596d")),
            place("Catetinho", "Park Way", "Pioneiros", "A primeira residência oficial de Juscelino em Brasília.", "Grátis", "https://www.google.com/maps/search/Museu+do+Catetinho", img("1564501049412-61c2a3083791"), img("1505664194779-8beaceb93744")),
            place("Museu Vivo da Memória", "Núcleo Bandeirante", "Museus", "História dos trabalhadores e dos primeiros anos da cidade.", "Grátis", "https://www.google.com/maps/search/Museu+Vivo+da+Memória+Candanga", img("1564399579883-451a5d44ec08"), img("1577083552431-6e5fd01988a5"))
        ]
    },
    familia: {
        title: "Família",
        description: "Passeios, natureza e diversão para viver Brasília com crianças e toda a família.",
        filters: ["Todos", "Animais", "Parques", "Diversão"],
        places: [
            place("Zoológico de Brasília", "Candangalândia", "Animais", "Educação ambiental e contato com diferentes espécies.", "$", "https://www.google.com/maps/search/Zoológico+de+Brasília", img("1535338454770-8be927b5a00b"), img("1549366021-9f761d450615")),
            place("Nicolândia", "Parque da Cidade", "Diversão", "Brinquedos e atrações para diferentes idades.", "$$", "https://www.google.com/maps/search/Nicolândia+Brasília", img("1500530855697-b586d89ba3ee"), img("1472162072942-cd5147eb3902")),
            place("Parque Ana Lídia", "Parque da Cidade", "Parques", "Espaço infantil tradicional cercado por área verde.", "Grátis", "https://www.google.com/maps/search/Parque+Ana+Lídia+Brasília", img("1596997000103-e597b3ca50df"), img("1542810634-71277d95dcbb"))
        ]
    }
};

function img(id) {
    return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=82`;
}

function place(name, region, type, description, price, route, ...images) {
    return { name, region, type, description, price, route, images };
}

const exploreModal = document.querySelector("#explore-modal");
const exploreDialog = exploreModal?.querySelector(".explore-dialog");
const exploreClose = exploreModal?.querySelector(".explore-modal-close");
const exploreTitle = document.querySelector("#explore-modal-title");
const exploreDescription = document.querySelector("#explore-modal-description");
const exploreFilters = document.querySelector("#explore-modal-filters");
const exploreGrid = document.querySelector("#explore-places-grid");

let activeCategory = null;
let lastExploreTrigger = null;

function renderFilters(category) {
    exploreFilters.innerHTML = "";

    category.filters.forEach((filter, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `explore-filter${index === 0 ? " active" : ""}`;
        button.textContent = filter;
        button.addEventListener("click", () => {
            exploreFilters.querySelectorAll(".explore-filter").forEach(item => item.classList.remove("active"));
            button.classList.add("active");
            renderPlaces(category, filter);
        });
        exploreFilters.appendChild(button);
    });
}

function renderPlaces(category, filter = "Todos") {
    exploreGrid.innerHTML = "";
    const places = filter === "Todos" ? category.places : category.places.filter(item => item.type === filter);

    if (!places.length) {
        exploreGrid.innerHTML = '<p class="explore-empty">Nenhum lugar encontrado neste filtro.</p>';
        return;
    }

    places.forEach(item => exploreGrid.appendChild(createPlaceCard(item)));
}

function createPlaceCard(item) {
    const article = document.createElement("article");
    article.className = "explore-place-card";
    article.innerHTML = `
        <div class="explore-card-gallery">
            <img src="${item.images[0]}" alt="${item.name}" loading="lazy">
            <button class="explore-favorite" type="button" aria-label="Adicionar ${item.name} aos favoritos">♡</button>
            <button class="explore-gallery-button explore-gallery-prev" type="button" aria-label="Imagem anterior">‹</button>
            <button class="explore-gallery-button explore-gallery-next" type="button" aria-label="Próxima imagem">›</button>
            <span class="explore-gallery-count">1 / ${item.images.length}</span>
            <span class="explore-place-tag">${item.type}</span>
        </div>
        <div class="explore-card-content">
            <p class="explore-card-region">${item.region}</p>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="explore-card-footer">
                <span>${item.price}</span>
                <a href="${item.route}" target="_blank" rel="noopener">Ver rota →</a>
            </div>
        </div>`;

    let imageIndex = 0;
    const imageElement = article.querySelector(".explore-card-gallery img");
    const counter = article.querySelector(".explore-gallery-count");

    function changeImage(direction) {
        imageIndex = (imageIndex + direction + item.images.length) % item.images.length;
        imageElement.src = item.images[imageIndex];
        counter.textContent = `${imageIndex + 1} / ${item.images.length}`;
    }

    article.querySelector(".explore-gallery-prev").addEventListener("click", () => changeImage(-1));
    article.querySelector(".explore-gallery-next").addEventListener("click", () => changeImage(1));

    const favorite = article.querySelector(".explore-favorite");
    favorite.addEventListener("click", () => {
        const selected = favorite.classList.toggle("selected");
        favorite.textContent = selected ? "♥" : "♡";
        favorite.setAttribute("aria-label", selected ? `Remover ${item.name} dos favoritos` : `Adicionar ${item.name} aos favoritos`);
    });

    return article;
}

function openExploreModal(categoryId, trigger) {
    const category = exploreData[categoryId];
    if (!category || !exploreModal) return;

    activeCategory = categoryId;
    lastExploreTrigger = trigger;
    exploreTitle.textContent = category.title;
    exploreDescription.textContent = category.description;
    renderFilters(category);
    renderPlaces(category);

    exploreModal.classList.add("active");
    exploreModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("explore-modal-open");
    setTimeout(() => exploreClose?.focus(), 80);
}

function closeExploreModal() {
    if (!exploreModal) return;
    exploreModal.classList.remove("active");
    exploreModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("explore-modal-open");
    lastExploreTrigger?.focus();
}

document.querySelectorAll("[data-category]").forEach(trigger => {
    trigger.addEventListener("click", () => openExploreModal(trigger.dataset.category, trigger));
});

exploreClose?.addEventListener("click", closeExploreModal);
exploreModal?.addEventListener("click", event => {
    if (event.target === exploreModal) closeExploreModal();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && exploreModal?.classList.contains("active")) closeExploreModal();
});

exploreDialog?.addEventListener("keydown", event => {
    if (event.key !== "Tab") return;
    const focusable = exploreDialog.querySelectorAll("button:not([disabled]), a[href]");
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
