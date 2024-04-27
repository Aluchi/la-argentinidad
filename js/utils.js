// INFO DÓLAR
// Cotizaciónes de dólar
function tiposDeDolar() {
    const headerDolarInfo = document.querySelector("#header-dolar-info");

    fetch("https://dolarapi.com/v1/dolares")
    .then((res) => res.json())
    .then((data) => {
        const ul = document.createElement("ul");
        
        data.forEach(dolar => {
            const li = document.createElement("li");
            li.innerHTML = `
                Dólar ${dolar.nombre}: <strong>$${dolar.venta}</strong>
            `;
            ul.append(li);
        })

        headerDolarInfo.append(ul);
    });
}
tiposDeDolar();




// Generar dinámicamente noticias en el sidebar.
const asideNoticesContainer = document.querySelector("#la-timeline-list");

function cargarNoticiasDeAside() {
    fetch("../notices.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const firstFiveNotices = data.slice(0, 6);
            firstFiveNotices.forEach(noticia => {
                if(noticia.divider){
                    return;
                }
                const li = document.createElement("li");
                li.classList.add("flex", "pb-16");
                li.innerHTML = `
                    <div class="subtitle-list flex">
                        <time class="--font-2xs" datetime="${noticia.noticeData.datetime}">${noticia.noticeData.datetime}</time>
                        <article class="sidebar-notice">
                            <button>
                                <section class="description-container">
                                    <h2>${noticia.title}</h2>
                                </section>
                            </button>
                        </article>
                    </div>
                    `;
                li.addEventListener("click", () => {
                    sessionStorage.setItem('selectedNotice', JSON.stringify(noticia));
                    window.location.href = `noticia.html?id=${noticia.title}`;
                });
                asideNoticesContainer.append(li);
            });
        })
        .catch((error) => {
            error = "No se pudo generar el contenido de la página :b.";
            alert(error)
        });
}
cargarNoticiasDeAside();

// Filtrado de noticias del menú hamburguesa por secciones.
function cargarNoticiasPorSeccion(seccion) {
    fetch("../notices.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const noticesContainer = document.querySelector("#notices-container");
            const noticiaFiltrada = data.filter(noticia => {
                if (noticia.section) {
                    return noticia.section.toLowerCase() === seccion.toLowerCase();
                } else {
                    return false; // No coincidirá con ninguna sección
                }
            });
            noticesContainer.innerHTML = "";
            noticiaFiltrada.forEach(noticia => {
                if (noticia.divider) {
                    const divider = document.createElement("div");
                    divider.classList.add("divider");
                    noticesContainer.append(divider);
                } else {
                    const article = document.createElement("article");
                    article.classList.add("noticia-item");
                    article.classList.add(noticia.class);
                    article.innerHTML = `
                        <div class="noticia-container flex flex-column">
                            <img src="${noticia.image}" alt="${noticia.title}">
                            <div class="noticia-content">
                                <h2>${noticia.title}</h2>
                                <p>${noticia.desc}</p>
                            </div>
                        </div>
                    `;
                    article.addEventListener("click", () => {
                        sessionStorage.setItem('selectedNotice', JSON.stringify(noticia));
                        window.location.href = `noticia.html?id=${noticia.title}`;
                    });
                    noticesContainer.append(article);
                }
            });
        })
        .catch((error) => {
            console.error(error)
        });
}

const politicaSectionBtn = document.querySelector("#politica");
const economiaSectionBtn = document.querySelector("#economia");
const deportesSectionBtn = document.querySelector("#deportes");
const mundoSectionBtn = document.querySelector("#noticias-del-mundo");
const sociedadSectionBtn = document.querySelector("#sociedad");
const opinionSectionBtn = document.querySelector("#opinion");

politicaSectionBtn&&politicaSectionBtn.addEventListener("click", () => {
    window.location.href = `seccion.html?seccion=política`;
});
economiaSectionBtn&&economiaSectionBtn.addEventListener("click", () => {
    window.location.href = `seccion.html?seccion=economía`;
});
deportesSectionBtn&&deportesSectionBtn.addEventListener("click", () => {
    window.location.href = `seccion.html?seccion=deportes`;
});
mundoSectionBtn&&mundoSectionBtn.addEventListener("click", () => {
    window.location.href = `seccion.html?seccion=noticias-del-mundo`;
});
opinionSectionBtn&&opinionSectionBtn.addEventListener("click", () => {
    window.location.href = `seccion.html?seccion=opinión`;
});
sociedadSectionBtn&&sociedadSectionBtn.addEventListener("click", () => {
    window.location.href = `seccion.html?seccion=sociedad`;
});
const params = new URLSearchParams(window.location.search);
const seccion = params.get("seccion");

if (seccion) {
    console.log(seccion);
    cargarNoticiasPorSeccion(seccion);
};
