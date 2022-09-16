window.addEventListener("scroll", () => {
    window.scrollY
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
});
