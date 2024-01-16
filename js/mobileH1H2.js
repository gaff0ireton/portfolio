const h1NameSpTexts = ['GAFF', 'O', 'IRETON'];
const h2NameSpTexts = ['IT IS', 'A', 'PORTFOLIO','SITE.'];
const h1NameSp = document.querySelectorAll('.h1NameSp');
const h2NameSp = document.querySelectorAll('.h2NameSp');

function addMobileClass() {
    let targetElement = document.getElementById('targetElement');
    const h1NameMobile = document.getElementById('h1Name');
    const h2NameMobile = document.getElementById('h2Name');

    // if (!isPhotoAnotherApplied) {
    //     for (let i = 0; i < ImagePaths.length && i < photoClases.length; i++) {
    //         photoClases[i].src = ImagePaths[i];
    //         console.log('!for');
    //     }
    // }

    // ウィンドウの幅が700px以下かどうかを確認
    if (window.innerWidth <= 700) {
        // クラスを追加
        h1NameMobile.classList.add('none');
        h2NameMobile.classList.add('none');

        h1NameSp.forEach(h1NameItem => {
            h1NameItem.classList.remove('none');
        });
        h2NameSp.forEach(h2NameItem => {
            h2NameItem.classList.remove('none');
        });
        

        for (let i = 0; i < h1NameSp.length && i < h1NameSpTexts.length; i++) {
            h1NameSp[i].textContent = h1NameSpTexts[i];
            h1NameSp[i].dataset.text = h1NameSpTexts[i];
        }

        for (let i = 0; i < h2NameSp.length && i < h2NameSpTexts.length; i++) {
            h2NameSp[i].textContent = h2NameSpTexts[i];
            h2NameSp[i].dataset.text = h2NameSpTexts[i];
        }

        // h1NameSpTexts.forEach(h1NameSpTextsItem => {
        //     h1NameSp.forEach(h1NameSpItem => {
        //         h1NameSpItem.textContent = h1NameSpTextsItem;
        //         h1NameSpItem.dataset.text = h1NameSpTextsItem;

        //     });
        // });
    } else {
        // クラスがすでに追加されていれば削除
        h1NameMobile.classList.remove('none');
        h2NameMobile.classList.remove('none');

        h1NameSp.forEach(h1NameItem => {
            h1NameItem.classList.add('none');
        });

        h2NameSp.forEach(h2NameItem => {
            h2NameItem.classList.add('none');
        });
    }


    // h1Name.textContent = h1Monika;
    // h1Name.dataset.text = h1Monika;
    // h2Name.textContent = h2Monika;
    // h2Name.dataset.text = h2Monika;



    // if(h1NameMobile.classList.contains('mobileClass')){
    //     h1NameMobile.innerHTML = 'GAFF<br>0<br>IRETON';
    //     h1NameMobile['data-text'] = h1NameMobile.innerHTML;

    //     h2NameMobile.innerHTML = '-GAFF<br>0<br>IRETON-';
    //     h2NameMobile.dataset.text = '-GAFF<br>0<br>IRETON-';
    // } else {
    //     h1NameMobile.textContent = '-GAFF 0 IRETON-';
    //     h1NameMobile.dataset.text = '-GAFF 0 IRETON-';
    // }
}

// ウィンドウサイズが変更されたときに実行
window.addEventListener('resize', addMobileClass);

// 初期化時にも実行
addMobileClass();

/*  else if(h1Name.classList.contains('mobileClass') && ) {
    console.log('hello');

} */