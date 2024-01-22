// const aboutLeft = document.getElementById("about").getBoundingClientRect().left;
// const aboutTop = document.getElementById("about").getBoundingClientRect().top;

// function scrollAbout () {
//     window.scrollTo({
//         left: aboutLeft,
//         top: aboutTop,
//         behavior: 'smooth'
//     });
// }

// const clickAbout = document.querySelector(".about");

// clickAbout.addEventListener('click', function () {
//     scrollAbout();
// })

// const aboutText = document.querySelector('.aboutText p');

// function typing(){
//     aboutText.classList.add("typing-animation");
// }

// window.addEventListener('scroll', typing);

const aboutElement = document.getElementById("about");

function scrollAbout() {
    aboutElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'  // 'start', 'center', 'end', 'nearest'
    });
}

const clickAbout = document.querySelector(".about");

clickAbout.addEventListener('click', function () {
    scrollAbout();
});

const workElement = document.getElementById("work");

function scrollWork() {
    workElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'  // 'start', 'center', 'end', 'nearest'
    });
}

const clickWork = document.querySelector(".work");

clickWork.addEventListener('click', function () {
    scrollWork();
});

const contactElement = document.getElementById("contact");

function scrollContact() {
    contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'  // 'start', 'center', 'end', 'nearest'
    });
}

const clickContact = document.querySelector(".contact");

clickContact.addEventListener('click', function () {
    scrollContact();
});



// スクロール検知用の関数
function handleScroll() {
    // .movieWrap要素を取得
    const movieWrap = document.querySelector('.movieWrap');

    // .headerBox要素を取得
    const headerBox = document.querySelector('.headerBox');

    // .movieWrapと.headerBoxの位置とサイズを取得
    const movieRect = movieWrap.getBoundingClientRect();
    const headerRect = headerBox.getBoundingClientRect();

    // 画面の高さを取得
    const windowHeight = window.innerHeight;

    // .movieWrapが画面外に出ているか判定
    const isMovieOutOfViewport = movieRect.bottom < 0 || movieRect.top > windowHeight;

    // 画面外に出ている場合は.headerBoxにheaderBoxScクラスを追加、そうでない場合は削除
    if (isMovieOutOfViewport) {
        headerBox.classList.add('headerBoxSc');
    } else {
        headerBox.classList.remove('headerBoxSc');
    }
}

// スクロールイベントにhandleScroll関数を登録
window.addEventListener('scroll', handleScroll);

// ページ読み込み時にも初回の判定を行う
window.addEventListener('load', handleScroll);
