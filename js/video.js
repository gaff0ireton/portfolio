addEventListener("DOMContentLoaded", function () {
  console.log("iPhoneで上方向にスクロールすると表示崩れます。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ死ね！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！");
  // 再生アイテム
  let play_item = [
    '../video/AC01',
    '../video/AC02',
    '../video/AC03',
    '../video/AC04',
    '../video/AC05',
    '../video/AC06',
    '../video/AC07',
    '../video/AC08',
    '../video/AC09',
    '../video/AC10',
    '../video/AC11',
  ];



  // 配列シャッフル
  play_item = shuffle(play_item);

  // 設定初期化
  let play_num = 0;
  let play_movie;
  const video01 = document.getElementById("hero-movie01");
  const video02 = document.getElementById("hero-movie02");
  const video03 = document.getElementById("hero-movie03");

  // canplaythrough イベントのリスナーを登録
  const canplaythroughHandler = function () {
    // 再生開始前に動画が完全にロードされたことを確認
    if (video01.readyState >= 3 && video02.readyState >= 3 && video03.readyState >= 3) {
      // 再生開始
      video01.play();
      video02.play();
      video03.play();

      video01.removeEventListener("canplaythrough", canplaythroughHandler, false);
      video02.removeEventListener("canplaythrough", canplaythroughHandler, false);
      video03.removeEventListener("canplaythrough", canplaythroughHandler, false);
    }
    // それ以外の場合は、canplaythrough イベントを待ち続ける
  };

  const endedHandler = function () {
    // 前の動画が完全に再生され終わったことを確認
    if (video01.currentTime >= video01.duration && video02.currentTime >= video02.duration && video03.currentTime >= video03.duration) {
      // イベントリスナーを削除
      video01.removeEventListener("ended", endedHandler, false);
      video02.removeEventListener("ended", endedHandler, false);
      video03.removeEventListener("ended", endedHandler, false);

      nextSetting();
    }
  };

  // 初回再生
  moviePlay();

  // 動画再生とコピーの入れ替え
  function moviePlay() {
    // 動画入れ替え

    if (Math.random() < 0.01) {

      // const randomIndex = Math.floor(Math.random() * play_monika.length);
      // const monikaPath = play_monika[randomIndex];

      // document.getElementById('hero-movie01-mp4').setAttribute('src', 'mov/' + monikaPath + '.mp4');
      // document.getElementById('hero-movie02-mp4').setAttribute('src', 'mov/' + monikaPath + '.mp4');
      // document.getElementById('hero-movie03-mp4').setAttribute('src', 'mov/' + monikaPath + '.mp4');

      video01.load();
      video02.load();
      video03.load();

      // ロード完了後に再生を試みる
      video01.addEventListener("canplaythrough", canplaythroughHandler, false);
      video02.addEventListener("canplaythrough", canplaythroughHandler, false);
      video03.addEventListener("canplaythrough", canplaythroughHandler, false);
    } else {

      // それ以外は通常の動画再生
      document.getElementById('hero-movie01-mp4').setAttribute('src', 'mov/' + play_item[play_num] + '.mp4');
      document.getElementById('hero-movie02-mp4').setAttribute('src', 'mov/' + play_item[play_num] + '.mp4');
      document.getElementById('hero-movie03-mp4').setAttribute('src', 'mov/' + play_item[play_num] + '.mp4');

      video01.load();
      video02.load();
      video03.load();

      video01.addEventListener("canplaythrough", canplaythroughHandler, false);
      video02.addEventListener("canplaythrough", canplaythroughHandler, false);
      video03.addEventListener("canplaythrough", canplaythroughHandler, false);
    }

    // 再生終了
    const endedHandler = function () {
      video01.removeEventListener("ended", endedHandler);
      video02.removeEventListener("ended", endedHandler);
      video03.removeEventListener("ended", endedHandler);
      nextSetting();
    };

    // イベントリスナーを設定
    video01.addEventListener("canplaythrough", canplaythroughHandler, false);
    video01.addEventListener("ended", endedHandler, false);
    video02.addEventListener("canplaythrough", canplaythroughHandler, false);
    video02.addEventListener("ended", endedHandler, false);
    video03.addEventListener("canplaythrough", canplaythroughHandler, false);
    video03.addEventListener("ended", endedHandler, false);

    // ...



  }

  // 次の動画を準備して再生
  function nextSetting() {
    if (play_num >= play_item.length - 1) {
      play_num = 0;
    } else {
      play_num++;
    }

    // 次を予約
    // play_movie変数を使用せず、直接play_itemを参照するよう変更
    // play_movie = play_item[play_num];

    // 動画再生
    moviePlay();
  }

  // 配列シャッフル
  function shuffle(array) {
    let n = array.length, t, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  }

})

function twoDigit(num) {
    let ret;
    if (num < 10) ret = "0" + num;
    else ret = num;
    return ret;
  }

  function threeDigit(num) {
    let ret;
    if (num < 100) ret = "0" + num;
    else ret = num;
    return ret;
  }

  function showClock() {
    let nowTime = new Date();
    let nowYear = nowTime.getFullYear();
    let nowMonth = twoDigit(nowTime.getMonth() + 1);
    let nowDate = twoDigit(nowTime.getDate());
    let nowHour = twoDigit(nowTime.getHours());
    let nowMin = twoDigit(nowTime.getMinutes());
    let nowSec = twoDigit(nowTime.getSeconds());
    let nowMSec = threeDigit(nowTime.getMilliseconds());
    let msg = `${nowYear}:${nowMonth}:${nowDate}:${nowHour}:${nowMin}:${nowSec}`;
    document.getElementById("realtime").innerHTML = msg;
  }
  setInterval("showClock()", 1);