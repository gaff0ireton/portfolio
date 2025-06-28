// // --- 要素キャッシュ ---
// const movieWrap = document.querySelector('.movieWrap');
// const headerBox = document.querySelector('.headerBox');
// const againBtn  = document.querySelector('.siteToggleBar');

// let headerThreshold;  // ヘッダー切り替え用
// let btnThreshold;     // ボタン切り替え用

// // 閾値を計算
// function calcThresholds() {
//   const top    = movieWrap.offsetTop;
//   const height = movieWrap.offsetHeight;
//   headerThreshold = top + height;
//   // 「画面下（scrollY + innerHeight）がmovieWrap下端を超えた＝ボタンが領域外に出た」
//   // → scrollY > (top + height - innerHeight)
//   btnThreshold    = top + height - window.innerHeight;
// }

// // スクロール処理
// function handleScroll() {
//   const scrollY = window.pageYOffset || document.documentElement.scrollTop;

//   // ヘッダー判定
//   if (scrollY > headerThreshold) {
//     headerBox.classList.add('headerBoxSc');
//   } else {
//     headerBox.classList.remove('headerBoxSc');
//   }

//   // ボタン判定
//   if (scrollY > btnThreshold) {
//     againBtn.style.display = 'block';
//   } else {
//     againBtn.style.display = 'none';
//   }
// }

// // 初期化
// window.addEventListener('DOMContentLoaded', () => {
//   calcThresholds();
//   handleScroll();
// });

// // リサイズ対応
// window.addEventListener('resize', () => {
//   calcThresholds();
//   handleScroll();
// });

// スクロール登録
window.addEventListener('scroll', handleScroll);

// --- スムーススクロール （おまけ） ---
document.querySelector('.about').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.work').addEventListener('click', () => {
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.contact').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
