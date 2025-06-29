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