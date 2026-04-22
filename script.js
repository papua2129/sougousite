const menuButton = document.getElementById("menuButton");
const menuList = document.getElementById("menuList");
const toggles = document.querySelectorAll(".toggle");
const fadeItems = document.querySelectorAll(".fade-in");

menuButton?.addEventListener("click", () => {
  menuList.classList.toggle("open");
});

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    target?.classList.toggle("open");
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, targetObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          targetObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15,
    }
  );

  fadeItems.forEach((item) => observer.observe(item));
} else {
  fadeItems.forEach((item) => item.classList.add("visible"));
}
