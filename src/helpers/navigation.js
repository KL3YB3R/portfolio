import { D } from "./../utils/variables";

// ? HEADER NAVIGATION
function navigatePage(event) {
  event.preventDefault();
  const parentOption = event.target.parentElement;
  parentOption.querySelectorAll(".option-navigate").forEach((option) => {
    if (option.getAttribute("href") === event.target.getAttribute("href")) {
      window.scroll({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
      option.classList.remove("border-white");
      option.classList.add("active", "border-zinc-950");
      D.querySelector(`#${option.getAttribute("href")}`).classList.remove("hidden");
      setTimeout(() => {
        D.querySelector(`#${option.getAttribute("href")}`).classList.remove("opacity-0");
        if (option.getAttribute("href") === "projects")
          D.querySelector(`#${option.getAttribute("href")}`).classList.add("opacity-100", "grid");
        else D.querySelector(`#${option.getAttribute("href")}`).classList.add("opacity-100");
      }, 150);
    } else {
      option.classList.remove("active", "border-zinc-950");
      option.classList.add("border-white");
      D.querySelector(`#${option.getAttribute("href")}`).classList.add("hidden");
      setTimeout(() => {
        if (option.getAttribute("href") === "projects")
          D.querySelector(`#${option.getAttribute("href")}`).classList.remove("opacity-100", "grid");
        else D.querySelector(`#${option.getAttribute("href")}`).classList.remove("opacity-100");
        D.querySelector(`#${option.getAttribute("href")}`).classList.add("opacity-0");
      }, 150);
    }
  });
}

D.addEventListener("click", (e) => {
  if (e.target.matches(".option-navigate")) navigatePage(e);
});
