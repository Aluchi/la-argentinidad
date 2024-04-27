
const noticesContainer = document.querySelector("#notices-container");

function cargarNoticias() {
    fetch("../notices.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const firstTenNotices = data.slice(0, 11);
            firstTenNotices.forEach(noticia => {
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
            error = "No se pudo generar el contenido de la página :b.";
            alert(error)
        });
}
cargarNoticias();
