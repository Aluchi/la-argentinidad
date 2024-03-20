const seccionesBtn = document.querySelector("#secciones-btn");
const nav = document.querySelector("nav");
const btnCerrar = document.querySelector("#btn-cerrar");
const overlay = document.querySelector('.overlay');

seccionesBtn.addEventListener("click", () => {
    nav.classList.add("secciones-active")
    overlay.classList.add('active');
});

btnCerrar.addEventListener("click", () => {
    nav.classList.remove("secciones-active")
    overlay.classList.remove('active');
});


/*----------------------------------------------------------------*/
/* Coloco esto solo como algo rápido ya que no he podido concluir la idea del proyecto inicial que quería 
    La proxima preentrega quizas funcionará de otra manera, pero será el mismo sitio.
*/

class Noticia {
    constructor(titulo, contenido) {
        this.titulo = titulo;
        this.contenido = contenido;
    }
}

const capturarEntradasBtn = document.getElementById("capturar-entradas-btn");
const noticiasContainer = document.querySelector(".noticias");
let noticias = []; // Lista para almacenar las noticias

capturarEntradasBtn.addEventListener("click", () => {
    const titulo = prompt("Ingrese el título de la noticia:");
    const contenido = prompt("Ingrese el contenido de la noticia:");

    if (titulo && contenido) {
        const nuevaNoticia = new Noticia(titulo, contenido);

        noticias.push(nuevaNoticia);

        renderizarNoticias();
    } else {
        alert("Debe ingresar tanto el título como el contenido de la noticia.");
    }
});

function renderizarNoticias() {
    noticiasContainer.innerHTML = "";

    noticias.forEach(noticia => {
        const nuevaNoticiaElemento = document.createElement("div");
        nuevaNoticiaElemento.classList.add("noticia-item");
        nuevaNoticiaElemento.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <p>${noticia.contenido}</p>
        `;
        noticiasContainer.appendChild(nuevaNoticiaElemento);
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const buscarPorTituloBtn = document.getElementById("buscarPorTituloBtn");
    buscarPorTituloBtn.addEventListener("click", buscarNoticiaPorTitulo);
});

function buscarNoticiaPorTitulo() {
    const titulo = prompt("Ingrese el título de la noticia:");
    if (titulo) {
        const noticiasFiltradas = noticias.filter(noticia => noticia.titulo.toLowerCase().includes(titulo.toLowerCase()));

        mostrarResultados(noticiasFiltradas);
    } else {
        alert("Debe ingresar un título.");
    }
}

function mostrarResultados(resultados) {
    noticiasContainer.innerHTML = "";

    resultados.forEach(noticia => {
        const nuevaNoticiaElemento = document.createElement("div");
        nuevaNoticiaElemento.classList.add("noticia-item");
        nuevaNoticiaElemento.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <p>${noticia.contenido}</p>
        `;
        noticiasContainer.appendChild(nuevaNoticiaElemento);
    });
}
