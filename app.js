document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".altmenu");
  const menus = menuBtn.nextElementSibling;

  menuBtn.onclick = function (event) {
    event.preventDefault();
    menus.classList.toggle("active");
  };
});
