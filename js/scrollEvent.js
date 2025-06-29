document.addEventListener('DOMContentLoaded', () => {
  const sections = Array.from(document.querySelectorAll('.mainWrap > section'));
  const SWIPE_THRESHOLD = 5;     // スワイプ判定の最小距離（px）
  let touchStartY = 0;
  let isScrolling = false;
  const THROTTLE = 600;          // 連続スクロール防止(ms)

  // 「現在どのセクションにいるか」を返す
  function getCurrentIndex() {
    return sections.findIndex(sec => {
      const r = sec.getBoundingClientRect();
      // セクションの上端がビューポートの中央付近にあるものを「今いる」とみなす
      return r.top >= -r.height/2 && r.top <= r.height/2;
    });
  }

  // 指定方向にスクロール
  function scrollDir(dir) {
    if (isScrolling) return;
    isScrolling = true;

    let idx = getCurrentIndex();
    if (idx < 0) idx = 0;
    const next = Math.max(0, Math.min(sections.length - 1, idx + dir));
    sections[next].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => isScrolling = false, THROTTLE);
  }

  // マウスホイール（デスクトップ）
  window.addEventListener('wheel', e => {
    e.preventDefault();
    scrollDir(e.deltaY > 0 ? 1 : -1);
  }, { passive: false });

  // タッチ開始
  window.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  // タッチ終了
  window.addEventListener('touchend', e => {
    const dy = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(dy) < SWIPE_THRESHOLD) return;
    scrollDir(dy > 0 ? 1 : -1);
  }, { passive: true });
});

    const cursor = document.getElementById('cursor');

    // 目的位置（マウス座標）
    let targetX = 0, targetY = 0;
    // 現在位置（描画用）
    let currentX = 0, currentY = 0;

    // マウス移動で目的位置を更新
    document.addEventListener('mousemove', e => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    // 毎フレーム呼び出すアニメーションループ
    function render() {
      // lerp の係数（0 < ease < 1）
      const ease = 0.15;

      // 現在位置を少しずつ目的位置に近づける
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      // 要素に反映
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      requestAnimationFrame(render);
    }

    // ループ開始
    render();

    