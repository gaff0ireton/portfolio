const buttonClick = document.querySelector('.all');
const worksBox = document.querySelector('.worksBox');
const worksText = document.querySelectorAll('.titleBox .code')
console.log(worksText);

buttonClick.addEventListener('click', function () {
    worksText.forEach((item) => {
        item.classList.add('open');
    });
    worksBox.classList.toggle('open');

        if(worksBox.classList.contains('open')){
            buttonClick.textContent = 'CLOSE';
        }else{
            buttonClick.textContent = 'VIEW ALL';
        }
});

