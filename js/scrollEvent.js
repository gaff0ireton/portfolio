document.addEventListener('DOMContentLoaded', () => {
  const sections = Array.from(document.querySelectorAll('.mainWrap > section'));
  let current = 0;
  let isThrottled = false;
  const THROTTLE = 700; // 調整可

  function scrollToSection(idx) {
    isThrottled = true;
    sections[idx].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => isThrottled = false, THROTTLE);
  }

  window.addEventListener('wheel', e => {
    if (isThrottled) return;
    // 通常スクロールは止めず、手前スクロールのみキャンセル
    e.preventDefault();
    const dir = e.deltaY > 0 ? 1 : -1;
    const next = Math.min(sections.length - 1, Math.max(0, current + dir));
    if (next !== current) {
      current = next;
      scrollToSection(current);
    }
  }, { passive: false });
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