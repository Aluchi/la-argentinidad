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


///////////////////////////////////////////////////////

const noticesArray = [

    // Noticias Inicio
    {
        image: `./imgs/jac.jpg`,
        title: "Notica principal la cual tiene la imágen de Julio Argentino Roca",
        desc: `Descripción: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ullam atque sint
        corrupti veritatis dignissimos eveniet consequuntur rerum doloremque! Similique asperiores ex
        provident sit expedita delectus fuga beatae itaque dolores`,
        content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        class: "noticia-banner",
        imgInfo: `  
            <span>Retrato de Julio Argentino Roca, ex-presiente de la República Argentina</span>
            <span>Julio Argentino Roca</span>        
        `,
        section: "política",
        noticeData: {
            recent: true,
            datetime: '2024-03-31 08:30'
        }
    },
    {
        image: `./imgs/ancap.png`,
        title: "Noticia que ocúpa 2 grids de 4",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
        content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        section: "política",
        noticeData: {
            recent: true,
            datetime: '2024-03-31 08:30'
        },
        class: "two-col"
    },
    {
        image: `./imgs/ancap.png`,
        title: "Noticia que ocúpa 2 grids de 4",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
        content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        class: "two-col",
        section: "política",
        imgInfo: `  
            <span>Something</span>
            <span>Algo</span>        
        `,
        noticeData: {
            recent: true,
            datetime: '2024-03-31 08:30'
        }
    },
    {
        divider: true // Elemento divider
    },
    {
        image: `./imgs/sddefault.jpg`,
        title: "Noticia Economía",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
        class: "two-col",
        section: "economía",
        content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        noticeData: {
            recent: false,
            datetime: '2024-03-31 08:30'
        }
    },
    {
        image: `./imgs/sample-img.png`,
        title: "Noticia Economía1",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
        content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        section: "economía"
    },
    {
        image: `./imgs/sample-img.png`,
        title: "Noticia Economía2",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        section: "economía"
    },
    {
        image: `./imgs/sample-img.png`,
        title: "Noticia Economía3",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        section: "economía"
    },

    //
    {
        image: `./imgs/sample-img.png`,
        title: "Noticia Deportes1",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        section: "Deportes"
    },
    {
        image: `./imgs/sample-img.png`,
        title: "Noticia Deportes2",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        section: "Deportes"
    },
    {
        image: `./imgs/sample-img.png`,
        title: "Noticia Deportes3",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        section: "Deportes"
    },

    //FIN DE LA GENERACIÓN
    // Resto de noticias
    {
        image: `./imgs/sample-img.png`,
        title: "Noticias globales 1",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
        content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        class: "two-col",
        section: "noticias-del-mundo"
    },
    {
        image: `./imgs/sample-img.png`,
        title: "Noticias globales 2",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
        content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        class: "two-col",
        section: "noticias-del-mundo"
    },

    // Opinión
    {
        image: `./imgs/sample-img.png`,
        title: "Noticia Opinión 1",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        class: "two-col",
        section: "opinión"
    },
    {
        image: `./imgs/sample-img.png`,
        title: "Noticia Opinión 2",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        class: "two-col",
        section: "opinión"
    },
    {
        image: `./imgs/arg-flag.png`,
        title: "Noticia Opinión 3",
        desc: "Pequeña descripción acerca de una notica no declarada la cual seguramente tendrá que ver con política.",
content: `
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>
                    <p class="mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident pariatur
                        tempore quidem ea, soluta debitis eos possimus earum nihil commodi, aliquid ratione, unde ut aut
                        molestiae sequi sapiente quam!
                    </p>`,
        imgInfo: `  
            <span>Noticia 2</span>
            <span>noti do</span>        
        `,
        class: "noticia-banner",
        section: "opinión"
    },


    // Sociedad
    // me falta hacer un dropdown
]

const noticesContainer = document.querySelector("#notices-container");

function loadNotices(notices) {

    noticesContainer.innerHTML = ``;

    notices.forEach(notice => {
        if (notice.divider) {
            const divider = document.createElement("div");
            divider.classList.add("divider");
            noticesContainer.append(divider);
        } else {
            const article = document.createElement("article");
            article.classList.add("noticia-item");
            article.classList.add(notice.class);
            article.innerHTML = `
                <div class="noticia-container flex flex-column">
                    <img src="${notice.image}" alt="${notice.title}">
                    <div class="noticia-content">
                        <h2>${notice.title}</h2>
                        <p>${notice.desc}</p>
                    </div>
                </div>
            `;

            article.addEventListener("click", () => {
                sessionStorage.setItem('selectedNotice', JSON.stringify(notice));
                window.location.href = `notice.html?id=${notice.title}`;
            })

            noticesContainer.append(article);
        }
    });
}
// Carga tan solo las 10 primeras noticias del Array en la página de inicio.
function cargarNoticiasInicio() {
    const loteInicial = noticesArray.slice(0, 11);
    loadNotices(loteInicial);
}

// Filtrado de noticias del menú hamburguesa por secciones.
function cargarNoticiasPorSeccion(seccion) {
    const noticiasFiltradas = noticesArray.filter(notice => notice.section && notice.section.toLowerCase() === seccion.toLowerCase());
    loadNotices(noticiasFiltradas);
}

const politicaSectionBtn = document.querySelector("#politica");
const economiaSectionBtn = document.querySelector("#economia");
const deportesSectionBtn = document.querySelector("#deportes");
const mundoSectionBtn = document.querySelector("#noticias-del-mundo");
const opinionSectionBtn = document.querySelector("#opinion");

politicaSectionBtn.addEventListener("click", () => {
    cargarNoticiasPorSeccion("política");
});

economiaSectionBtn.addEventListener("click", () => {
    cargarNoticiasPorSeccion("economía");
});

deportesSectionBtn.addEventListener("click", () => {
    cargarNoticiasPorSeccion("Deportes");
});
mundoSectionBtn.addEventListener("click", () => {
    cargarNoticiasPorSeccion("noticias-del-mundo");
});
opinionSectionBtn.addEventListener("click", () => {
    cargarNoticiasPorSeccion("opinión");
});

// Cargar las primeras 10 noticias al cargar la página
window.addEventListener('load', () => {
    cargarNoticiasInicio();
});


// Generar dinámicamente noticias en el sidebar.
const noticesList = document.querySelector(".la-timeline-list");

function loadNoticesOfSidebar(notices) {
    noticesList.innerHTML = '';

    notices.forEach(notice => {

    });
}
