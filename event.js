// htmlのIDの取得
const Btn = document.getElementById('btn')
const Text = document.getElementById('text')

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
  Text.textContent=('ボタンをクリックしました');
});