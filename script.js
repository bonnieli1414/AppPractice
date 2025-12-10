const KEY = "my-note";
const input = document.getElementById("note-input");
const saveBtn = document.getElementById("save-btn");
const display = document.getElementById("display");

// 第一次進來頁面時，先試著把舊資料拿出來
const saved = localStorage.getItem(KEY);
if (saved) {
  input.value = saved;
  display.textContent = "目前儲存的文字：" + saved;
}

// 按下儲存，就把文字存進 localStorage
saveBtn.addEventListener("click", function () {
  const text = input.value;
  localStorage.setItem(KEY, text);
  display.textContent = text
    ? "目前儲存的文字：" + text
    : "目前還沒有儲存任何文字。";
});
