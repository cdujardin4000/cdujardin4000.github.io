const   menu        =   document.querySelector('.l-main-menu');


document.querySelectorAll('.nav-hamburger').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
        menu.classList.toggle('open');
    });
});




