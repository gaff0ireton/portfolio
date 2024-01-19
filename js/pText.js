let arr = [];
const text = document.querySelectorAll('.js_typing');


function TypingInit() {
    document.querySelectorAll('.js_typing').forEach((element, i) => {
        arr[i] = new ShuffleText(element);
    });
}

// const text = document.querySelectorAll('.js_typing');
const shuffleTextInstances = []; // 新しい変数を追加

function init() {
    for (var i = 0; i < text.length; i++) {
        var element = text[i];
        element.dataset.index = i;

        // インスタンスを取得し、新しい変数に保存
        var shuffleTextInstance = new ShuffleText(element);
        shuffleTextInstances.push(shuffleTextInstance);

        // マウスオーバー時に再生する
        element.addEventListener('mouseenter', function () {
            shuffleTextInstances[+this.dataset.index].start();
        });

        // 初回を再生する
        shuffleTextInstance.start();
    }
}


// function init() {

//     for (var i = 0; i < text.length; i++) {

//         var element = text[i];
//         element.dataset.index = i;

//         // インスタンスを取得する
//         text[i] = new ShuffleText(element);

//         // マウスオーバー時に再生する
//         element.addEventListener('mouseenter', function () {
//             text[+this.dataset.index].start();
//         });

//         // 初回を再生する
//         text[i].start();
//     }
// }
// function TypingAnime() {
//     document.querySelectorAll(".js_typing").forEach((element, i) => {
//         const elemPos = element.offsetTop - 50;
//         const scroll = window.scrollY;
//         const windowHeight = window.innerHeight;

//         if (scroll >= elemPos - windowHeight) {
//             if (!element.classList.contains("endAnime")) {
//                 arr[i].start();
//                 arr[i].duration = 800;
//                 element.classList.add("endAnime");
//             }
//         } else {
//             element.classList.remove("endAnime");
//         }
//     });
// }
window.addEventListener('load', init);

// window.addEventListener('mouseover', function () {
//     TypingAnime();
// });

// for (var i = 0; i < text.length; i++) {
//     text[i].addEventListener('mouseover', createMouseOverHandler(i));
// }

// // マウスオーバー時の処理を行う関数
// function createMouseOverHandler(index) {
//     return function () {
//         if (!text[index].classList.contains("endAnime")) {
//             TypingInit();
//             // arr[index].start();
//             // arr[index].duration = 400;
//             arr[index].start();
//             arr[index].duration = 800;
//             text[index].classList.add("endAnime");
//         }
//         text[index].classList.remove("endAnime");
//     };
// }

// if (!element.classList.contains("endAnime")) {
//     arr[index].start();
//     arr[index].duration = 800;
//     element.classList.add("endAnime");
// } else {
//     element.classList.remove("endAnime");
// }


// text.addEventListener('mouseover', function () {
//     TypingInit();
//     arr[i].start();
//     arr[i].duration = 800;
// });