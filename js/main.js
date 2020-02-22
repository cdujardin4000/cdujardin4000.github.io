const   menu        =   document.querySelector('.l-main-menu');


document.querySelectorAll('.nav-hamburger').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
        menu.classList.toggle('open');
    });
});



var mymenu = document.getElementById("l-main-menu");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mymenu.style.background = "black";
    } else {
        mymenu.style.background = "transparent";
    }
}

