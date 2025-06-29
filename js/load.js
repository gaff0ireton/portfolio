(function() {
  const loadBG  = document.querySelector('.loading_bg');
  const visited = localStorage.getItem('hasVisited');

  // Navigation Timing Level2
  const navEntries = performance.getEntriesByType('navigation');
  const isReload   = navEntries.length > 0
                     ? navEntries[0].type === 'reload'
                     : (performance.navigation 
                        && performance.navigation.type === performance.navigation.TYPE_RELOAD);

  if (visited && !isReload) {
    // 2回目以降かつリロードじゃない → スキップ
    loadBG.style.display = 'none';
    document.body.classList.remove('loading-lock');
  } else {
    // 初回 or リロード → 読み込み完了後に表示を消す
    window.addEventListener('load', () => {
      loadBG.style.display = 'none';
      document.body.classList.remove('loading-lock');
      // リロード時も再設定しておく（既に入っていても上書き）
      localStorage.setItem('hasVisited', 'true');
    });
  }
})();
