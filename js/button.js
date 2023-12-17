const buttonClick = document.querySelector('.all');
const worksBox = document.querySelector('.worksBox');

buttonClick.addEventListener('click', function () {
    worksBox.classList.toggle('open');
        if(worksBox.classList.contains('open')){
            buttonClick.textContent = 'CLOSE';
        }else{
            buttonClick.textContent = 'VIEW ALL';
        }
});

