(function() {
      const loadBG = document.querySelector('.loading_bg');
      const visited = localStorage.getItem('hasVisited');

      if (visited) {
        // 二回目以降：即スキップ
        loadBG.style.display = 'none';
        document.body.classList.remove('loading-lock');
      } else {
        // 初回：読み込み完了後に非表示
        window.addEventListener('load', () => {
          // フェードアウト派なら ↓
          // loadBG.classList.add('hide');
          // setTimeout(() => loadBG.style.display = 'none', 400);

          // 即非表示派なら ↓
          loadBG.style.display = 'none';

          // スクロール制限解除
          document.body.classList.remove('loading-lock');

          // 次回以降スキップフラグを立てる
          localStorage.setItem('hasVisited', 'true');
        });
      }
    })();