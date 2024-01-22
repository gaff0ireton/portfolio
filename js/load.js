window.addEventListener('load', loading);
const loadBG = document.querySelector('.loading_bg');

function loading() {
    // setTimeout(function(){
    // document.body.style.overflow = 'hidden';
    setTimeout(function () {
        loadBG.classList.add('active');
        // document.body.style.overflow = '';
    }, 10000);
}