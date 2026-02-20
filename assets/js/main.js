/**
 * コピーライトの年号を現在の西暦で動的に表示する
 */
function setCopyrightYear() {
  const year = new Date().getFullYear();
  const elements = document.querySelectorAll('.js-current-year');
  elements.forEach((el) => {
    el.textContent = year;
  });
}

document.addEventListener('DOMContentLoaded', setCopyrightYear);
