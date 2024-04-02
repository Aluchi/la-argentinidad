window.addEventListener('DOMContentLoaded', () => {
    const selectedNotice = JSON.parse(sessionStorage.getItem('selectedNotice'));

    if (selectedNotice) {
        const noticeContent = document.querySelector('#notice-container');
        noticeContent.innerHTML = `
            <div class="texto-principal-de-nota mb-20">
                <span>${selectedNotice.section}</span>
                <h1>${selectedNotice.title}</h1>
                <p>${selectedNotice.desc}</p>
            </div>
            <figure class="flex flex-column mb-20">
                <picture>
                    <img src="${selectedNotice.image}" alt="${selectedNotice.title}">
                </picture>
                <figcaption class="flex flex-column">
                    ${selectedNotice.imgInfo}
                </figcaption>
            </figure>
            <div class="nota-content">
                ${selectedNotice.content}
            </div>
        `;
    } else {
        console.error('No se encontró ninguna noticia seleccionada en sessionStorage');
    }
});