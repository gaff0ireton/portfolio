const swiper = new Swiper(".swiper", {
  // スライダーのオプションを設定
  loop: true, // スライダーをループさせる
  speed: 1500, // スライドの切り替え速度（デフォルトは300）
  autoplay: false, // 最初は自動再生を無効
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

