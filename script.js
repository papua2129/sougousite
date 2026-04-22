const menuButton = document.getElementById("menuButton");
const menuList = document.getElementById("menuList");
const toggles = document.querySelectorAll(".toggle");

menuButton?.addEventListener("click", () => {
  menuList.classList.toggle("open");
});

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    target?.classList.toggle("open");
  });
});
