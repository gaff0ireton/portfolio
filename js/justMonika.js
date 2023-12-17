// const allBodyElemets = Array.from(document.querySelectorAll('body *'));
// const yourName = document.querySelector('.yourName');
// const monikaAccess = document.querySelector('.monikaAccess');
// const buttonClick = document.querySelector('.all');
// const worksBox = document.querySelector('.worksBox');
// const returnToMonika = document.querySelector('.returnToMonika');
// const byeMonika = document.getElementById('return');
// const monikaModal = document.getElementById('monikaModal');

// buttonClick.addEventListener('click', function () {
//     worksBox.classList.toggle('open');
//     if(!isMonikaApplied){
//         if(worksBox.classList.contains('open')){
//             buttonClick.textContent = 'CLOSE';
//         }else{
//             buttonClick.textContent = 'VIEW ALL';
//         }
//     }
// });

// let isMonikaApplied = false;
// let savedText;

// function monikaClose() {
//     yourName.classList.add('close');
// }

// function monikaActive() {
//     monikaAccess.classList.remove('close');
// }

// function saveAndDisplay() {
//     // フォームの入力内容を取得
//     const inputValue = document.getElementById('textInput').value;

//     savedText = inputValue;

//     if ((savedText) && ((savedText.toLowerCase() == 'monika') || (savedText == 'モニカ'))) {
//         document.getElementById('displayArea').textContent = `あなたの名前、 ${savedText}っていうの？ 私と一緒ね！ …なーんてね。`;
//         setTimeout(function () {
//             monikaClose();
//         }, 5000);
//     } else if ((savedText) && ((savedText.toLowerCase() == 'yuri') || (savedText == 'ユリ'))) {
//         document.getElementById('displayArea').textContent = `あなたの名前、 ${savedText}っていうの？ 私の部活のメンバーと同じ名前なのね！`;
//         setTimeout(function () {
//             monikaClose();
//         }, 5000);

//     } else {
//         yourName.classList.add('close');
//     }
//     // 入力内容を表示するエリアにテキストをセット


//     // if(savedText){
//     //     yourName.classList.add('close');
//     // }
// }

// // 定数 //

// const moniBugText = ['JUST MONIKA.', 'JUST MONIKA.', 'JUST MONIKA.'];
// const text = ['ABOUT', 'WORK', 'CONTACT'];
// const moniBugH1 = ['JUST MONIKA.'];
// const h1 = ['- RIKA IMAI -'];
// const h2 = ['IT IS A PORTFOLIO SITE.'];
// const monikaMovie = ['images/justMonika.mp4', 'images/justMonika.mp4', 'images/justMonika.mp4'];
// const movie = ['images/m01.mp4', 'images/m01.mp4', 'images/m01.mp4'];
// const monikaPicture = ['images/monikaIcon.png', 'images/monikaIcon.png', 'images/justMonika.jpg',
//     'images/justMonika.jpg', 'images/justMonika.jpg', 'images/justMonika.jpg',
//     'images/justMonika.jpg', 'images/justMonika.jpg', 'images/justMonika.jpg',
//     'images/justMonika.jpg', 'images/justMonika.jpg', 'images/justMonika.jpg'];
// const picture = ['images/me.gif','images/me.gif','images/p01.png',
// 'images/p11.png','images/p01.png','images/p02.png',
// 'images/p03.png','images/p06.png','images/p07.jpg',
// 'images/p08.png','images/p09.png','images/p10.png'];
// const monikaText = ["I'm super excited for you to make friends with everyone and help the Literature Club become a more intimate place for all my members. But I can tell already that you're a sweetheart—will you promise to spend the most time with me? ♥"];
// const aText = ['大学卒業後、IT企業にてプログラマーを6ヶ月経験。<br>2023年9月より職業訓練校にてWebデザイン、グラフィックを学び、現在に至ります。<br>ゲームとGif画像を作ることが好き。<br>2018年 兵庫県立神戸商業高等学校卒業<br>2020年 私立嵯峨美術短期大学卒業<br>']
// const monikaButton = ["JUST MONIKA."];
// const button = ['もっと見る'];

// // //

// function helloMonika() {
//     monikaAccess.classList.add('active');
// }

// function justMonika() {
//     monikaAccess.classList.add('close');
//     allBodyElemets.forEach((allBodyElemetsItem) => {
//         allBodyElemetsItem.classList.add('justMonika');
//     });
//     const moniBugH2 = ['Hello,' + savedText + '.', 'JUST MONIKA.', 'JUST MONIKA.', 'JUST MONIKA.'];
//     isMonikaApplied = true;

//     const movieWrap = document.querySelector('.movieWrap');
//     const aMonikaElemets = document.querySelectorAll('.navA.justMonika');
//     const videoMonikaElements = document.querySelectorAll('video.justMonika');
//     const h1MonikaElement = document.querySelector('h1.justMonika');
//     const h2MonikaElements = document.querySelectorAll('h2.justMonika');
//     const imgMonikaElements = document.querySelectorAll('img.justMonika');
//     const aboutText = document.querySelector('.aboutText p');
//     const ButtonAll = document.querySelector('.all');


//     movieWrap.classList.add('glitch');
//     for (let i = 0; i < monikaMovie.length && i < videoMonikaElements.length; i++) {
//         videoMonikaElements[i].src = monikaMovie[i];
//     }
//     for (let i = 0; i < moniBugText.length && i < aMonikaElemets.length; i++) {
//         aMonikaElemets[i].textContent = moniBugText[i];
//     }
//     for (let i = 0; i < moniBugH2.length && i < h2MonikaElements.length; i++) {
//         h2MonikaElements[i].textContent = moniBugH2[i];
//     }
//     for (let i = 0; i < monikaPicture.length && i < imgMonikaElements.length; i++) {
//         imgMonikaElements[i].src = monikaPicture[i];
//     }
//     h1MonikaElement.textContent = moniBugH1;
//     aboutText.innerHTML = monikaText;
//     ButtonAll.textContent = monikaButton;
//     // console.log(isMonikaApplied);
// }

// function sayoNara() {
//     const movieWrap = document.querySelector('.movieWrap');
//     const aMonikaElemets = document.querySelectorAll('.navA.justMonika');
//     const videoMonikaElements = document.querySelectorAll('video.justMonika');
//     const h1MonikaElement = document.querySelector('h1.justMonika');
//     const h2MonikaElements = document.querySelectorAll('h2.justMonika');
//     const imgMonikaElements = document.querySelectorAll('img.justMonika');
//     const aboutText = document.querySelector('.aboutText p');
//     const ButtonAll = document.querySelector('.all');

//     for (let i = 0; i < movie.length && i < videoMonikaElements.length; i++) {
//         videoMonikaElements[i].src = movie[i];
//     }
//     for (let i = 0; i < text.length && i < aMonikaElemets.length; i++) {
//         aMonikaElemets[i].textContent = text[i];
//     }
//     for (let i = 0; i < h2.length && i < h2MonikaElements.length; i++) {
//         h2MonikaElements[i].textContent = h2[i];
//     }
//     for (let i = 0; i < monikaPicture.length && i < imgMonikaElements.length; i++) {
//         imgMonikaElements[i].src = picture[i];
//     }
//     h1MonikaElement.textContent = h1;
//     aboutText.innerHTML = aText;
//     ButtonAll.textContent = button;



//     movieWrap.classList.remove('glitch');
//     allBodyElemets.forEach((allBodyElemetsItem) => {
//         allBodyElemetsItem.classList.remove('justMonika');

//     });
//     isMonikaApplied = false;

// }

// // if(isMonikaApplied){
// //     console.log('hnwe');
// //     setInterval(sayoNara, 1000);

// // }

// let isFirstCall = true;


// const intervalId = setInterval(() => {
//     console.log(isFirstCall);
//     if (isFirstCall) {
//         if (yourName.classList.contains('close')) {
//             isFirstCall = false;
//             const monikaHover = document.querySelector('.moniIcon.animate__animated');
//             monikaActive();

//             if (monikaHover) {
//                 monikaHover.addEventListener('mouseenter', function () {
//                     monikaHover.classList.add('animate__bounce');
//                     setTimeout(function () {
//                         if (monikaHover.classList.contains('animate__bounce')) {
//                             monikaHover.classList.remove('animate__bounce');
//                         }
//                     }, 1000);
//                 });
//             }
//             setTimeout(function () {
//                 if (savedText) {

//                     justMonika();

//                 }
//             }, 10000);
//         }
//     }
//     if (!isFirstCall) {
//         clearInterval(intervalId);
//     }
// }, 9000);

// byeMonika.addEventListener('click', function () {
//     sayoNara();
//     monikaModal.style.display = 'none';
//     // returnToMonika.classList.add('again');
// })

// const againMonika = false;

// function justMonikaNthTime() {
//     allBodyElemets.forEach((allBodyElemetsItem) => {
//         allBodyElemetsItem.classList.add('justMonika');
//     });
//     const moniBugH2 = ['Hello,' + savedText + '.', 'JUST MONIKA.', 'JUST MONIKA.', 'JUST MONIKA.'];

//     const movieWrap = document.querySelector('.movieWrap');
//     const aMonikaElemets = document.querySelectorAll('.navA.justMonika');
//     const videoMonikaElements = document.querySelectorAll('video.justMonika');
//     const h1MonikaElement = document.querySelector('h1.justMonika');
//     const h2MonikaElements = document.querySelectorAll('h2.justMonika');
//     const imgMonikaElements = document.querySelectorAll('img.justMonika');
//     const aboutText = document.querySelector('.aboutText p');
//     const ButtonAll = document.querySelector('.all');


//     movieWrap.classList.add('glitch');
//     for (let i = 0; i < monikaMovie.length && i < videoMonikaElements.length; i++) {
//         videoMonikaElements[i].src = monikaMovie[i];
//     }
//     for (let i = 0; i < moniBugText.length && i < aMonikaElemets.length; i++) {
//         aMonikaElemets[i].textContent = moniBugText[i];
//     }
//     for (let i = 0; i < moniBugH2.length && i < h2MonikaElements.length; i++) {
//         h2MonikaElements[i].textContent = moniBugH2[i];
//     }
//     for (let i = 0; i < monikaPicture.length && i < imgMonikaElements.length; i++) {
//         imgMonikaElements[i].src = monikaPicture[i];
//     }
//     h1MonikaElement.textContent = moniBugH1;
//     aboutText.innerHTML = monikaText;
//     ButtonAll.textContent = monikaButton;
//     againMonika = true;
//     // console.log(isMonikaApplied);
// }

// // returnToMonika.addEventListener('click', function () {
// //     if((!againMonika) && (returnToMonika.classList.contains('again')))
// //     justMonikaNthTime();
// //     const back = ['戻る？'];
// //     returnToMonika.textContent = back;
// // })
// // returnToMonika.addEventListener('click', function () {
// //     if (returnToMonika.classList.contains('again')) {
// //         const backTo = ['モニカにもう一度会いに行く？'];
// //         returnToMonika.textContent = backTo;
// //         sayoNara();
// //     }
// // })

// function displayModal() {

//     monikaModal.style.display = 'block';
// }

// window.addEventListener('scroll', function () {
//     if (isMonikaApplied) {

//         // ページが最下部までスクロールされたかどうかをチェック
//         if (window.scrollY >= (document.documentElement.scrollHeight - window.innerHeight)) {
//             // 最下部までスクロールされたらモーダルを表示
//             displayModal();

//             // 一度表示したらリスナーを削除する場合は以下のコメントを解除
//             // window.removeEventListener('scroll', arguments.callee);
//         }
//     }
// });