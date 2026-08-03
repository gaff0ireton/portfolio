

const swiper = new Swiper(".swiper", {
  // スライダーのオプションを設定
  loop: true, // スライダーをループさせる
  speed: 1500, // スライドの切り替え速度（デフォルトは300）
  autoplay: false, // 最初は自動再生を無効
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});