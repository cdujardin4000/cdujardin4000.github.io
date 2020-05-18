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


var mybutton = document.getElementById("myBtn");
// quand l'user descend de 20px, le bouton apparait
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } 
    else {
        mybutton.style.display = "none";
    }
}
// fonction back to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}