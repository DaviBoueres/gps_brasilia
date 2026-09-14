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