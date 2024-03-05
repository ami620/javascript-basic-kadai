// htmlのIDの取得
const Btn = document.getElementById('btn')
const Text = document.getElementById('text')

// ボタンクリック時のイベント
Btn.addEventListener('click', () => {
  setTimeout(() => {
    Text.textContent=('ボタンをクリックしました');
  }, 2000);
});