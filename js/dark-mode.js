// HEADER

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
overlay.addEventListener("click", () => {
    nav.classList.remove("secciones-active")
    overlay.classList.remove('active');
});


// DARK MODE

const darkModeBtn = document.querySelector("#dark-mode-toggle");
const likeBody = document.querySelector("#like-body");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    likeBody.classList.toggle("dark");
    darkModeBtn.classList.toggle("dark-mode-active");

    if (darkModeBtn.classList.contains("dark-mode-active")) {
        darkModeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    } else {
        darkModeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
    

    // guardar en localStorage
    if(likeBody.classList.contains(`dark`)){
        localStorage.setItem(`dark-mode`, `true`);
    } else {
        localStorage.setItem(`dark-mode`, `false`);
    }

});

if(localStorage.getItem(`dark-mode`) === `true`){
    document.body.classList.add("dark");
    likeBody.classList.add("dark");
    darkModeBtn.classList.add("dark-mode-active");
    darkModeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
} else {
    document.body.classList.remove("dark");
    likeBody.classList.remove("dark");
    darkModeBtn.classList.remove("dark-mode-active");
    darkModeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

//
