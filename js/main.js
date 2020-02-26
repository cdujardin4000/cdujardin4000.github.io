const   menu        =   document.querySelector('.l-main-menu');
const   btn         =   document.querySelector('.nav-hamburger');

document.querySelectorAll('.nav-hamburger').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
        menu.classList.toggle('open');
    });
    
});
document.querySelectorAll('.link').forEach(item => {
    item.addEventListener('click', e => {
        menu.classList.toggle('open');
        btn.classList.toggle('active');
    });
});


