burgerIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
});
