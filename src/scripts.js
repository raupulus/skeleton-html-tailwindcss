/**
 * Muestra u oculta la descripción de la red social al pulsar el botón de "Más Información"
 */
function toggleDescription(e, ele) {
    e.stopPropagation();

    let moreInfo = ele.closest('li').querySelector('.more-info');

    let currentIsHidden = moreInfo.classList.contains('hidden');

    let allMoreInfo = document.querySelectorAll('.more-info');

    Array.from(allMoreInfo).forEach((btn) => {
        btn.classList.add('hidden');
        if (!btn.classList.contains('hidden')) {
            btn.classList.add('hidden');
        }
    });

    if (currentIsHidden) {
        moreInfo.classList.remove('hidden');
    }
}

/**
 * Muestra u oculta el menú de navegación.
 */
function toggleMenu() {
    let nav = document.getElementById('box-navbar');
    nav.classList.contains('hidden') ? nav.classList.remove('hidden') : nav.classList.add('hidden');
}

/**
 * Mueve hacia el comienzo de la página.
 */
function goToTop() {
    window.scrollTo(0, 0);
}



window.document.addEventListener('click', () => {

    // Mostrar/ocultar descripción de cada red social.

    let boxMoreInfo = document.querySelectorAll('.box-more-info');

    if (boxMoreInfo) {
        Array.from(boxMoreInfo).forEach((ele) => {
            ele.addEventListener('click', (e) => toggleDescription(e, ele));
        });
    }

    // Mostrar/ocultar menú de navegación.
    let btnMenu = document.getElementById('btn-menu');

    if (btnMenu) {
        btnMenu.addEventListener('click', toggleMenu);
    }


    // Subir al principio de la página.
    let btnsGoTop = document.querySelectorAll('.btn-go-top');

    if (btnsGoTop) {
        Array.from(btnsGoTop).forEach((ele) => {
            ele.addEventListener('click', () => goToTop());
        });
    }
});
