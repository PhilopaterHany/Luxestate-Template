window.addEventListener("scroll", () => {
    window.scrollY > 450
        ? (toTopBtn.style.right = "10px")
        : (toTopBtn.style.right = "-1000px");

    let scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - 750)) * 100
    );
    toTopBtn.style.borderImageSource = `conic-gradient(#ffcc03 ${scrollPercent}%, transparent ${scrollPercent}%)`;
});

toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
