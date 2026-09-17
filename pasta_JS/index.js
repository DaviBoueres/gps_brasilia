// Seleciona o botão do menu e a navegação
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

// Abre e fecha o menu no celular
toggle.addEventListener("click", () => {
    const menuAberto = nav.classList.toggle("open");

    toggle.setAttribute(
        "aria-expanded",
        String(menuAberto)
    );

    toggle.textContent = menuAberto ? "×" : "☰";
});

// Fecha o menu depois que o usuário seleciona uma opção
document
    .querySelectorAll(".main-nav a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

            toggle.textContent = "☰";

        });

    });

// Seleciona as seções e os links do menu
const sections = document.querySelectorAll(
    "main section[id], #inicio"
);

const links = document.querySelectorAll(
    ".main-nav a"
);

// Destaca no menu a seção que está aparecendo na tela
const navObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            links.forEach((link) => {

                const linkCorresponde =
                    link.getAttribute("href") ===
                    `#${entry.target.id}`;

                link.classList.toggle(
                    "active",
                    linkCorresponde
                );

            });

        });

    },
    {
        rootMargin: "-35% 0px -55%"
    }
);

// Observa todas as seções
sections.forEach((section) => {
    navObserver.observe(section);
});

// Cria a animação de entrada dos elementos
const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "visible"
                );

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.12
    }
);

// Aplica a animação aos elementos com a classe reveal
document
    .querySelectorAll(".reveal")
    .forEach((elemento) => {
        revealObserver.observe(elemento);
    });

    /* ===================================
   MODAL DE GASTRONOMIA
=================================== */

// Elementos utilizados pelo modal
const abrirGastronomia =
    document.querySelector("#abrir-gastronomia");

const modalGastronomia =
    document.querySelector("#modal-gastronomia");

const fecharGastronomia =
    document.querySelector("#fechar-gastronomia");

const containerGastronomia =
    modalGastronomia.querySelector(".modal-container");

// Guarda o último elemento selecionado
let ultimoElementoFocado = null;

// Abre o modal
function abrirModalGastronomia() {

    ultimoElementoFocado = document.activeElement;

    modalGastronomia.classList.add("active");

    modalGastronomia.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("modal-open");

    // Coloca o foco no botão de fechar
    setTimeout(() => {
        fecharGastronomia.focus();
    }, 100);

}

// Fecha o modal
function fecharModalGastronomia() {

    modalGastronomia.classList.remove("active");

    modalGastronomia.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");

    // Retorna o foco para a categoria Gastronomia
    if (ultimoElementoFocado) {
        ultimoElementoFocado.focus();
    }

}

// Abre ao clicar em Gastronomia
abrirGastronomia.addEventListener(
    "click",
    (evento) => {

        evento.preventDefault();

        abrirModalGastronomia();

    }
);

// Fecha ao clicar no X
fecharGastronomia.addEventListener(
    "click",
    fecharModalGastronomia
);

// Fecha ao clicar na área escura
modalGastronomia.addEventListener(
    "click",
    (evento) => {

        if (evento.target === modalGastronomia) {
            fecharModalGastronomia();
        }

    }
);

// Fecha ao pressionar Esc
document.addEventListener(
    "keydown",
    (evento) => {

        const modalEstaAberto =
            modalGastronomia.classList.contains("active");

        if (
            evento.key === "Escape" &&
            modalEstaAberto
        ) {
            fecharModalGastronomia();
        }

    }
);

/* ===================================
   BOTÕES DE FAVORITOS
=================================== */

const botoesFavoritos =
    document.querySelectorAll(".favorite-button");

botoesFavoritos.forEach((botao) => {

    botao.addEventListener("click", () => {

        const estaSelecionado =
            botao.classList.toggle("selected");

        botao.textContent =
            estaSelecionado ? "♥" : "♡";

        botao.setAttribute(
            "aria-label",
            estaSelecionado
                ? "Remover dos favoritos"
                : "Adicionar aos favoritos"
        );

    });

});

/* ===================================
   FILTROS ILUSTRATIVOS
=================================== */

const botoesFiltro =
    document.querySelectorAll(".filter-button");

botoesFiltro.forEach((botao) => {

    botao.addEventListener("click", () => {

        botoesFiltro.forEach((item) => {
            item.classList.remove("active");
        });

        botao.classList.add("active");

    });

});