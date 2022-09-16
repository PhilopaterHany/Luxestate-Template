const counters = document.querySelectorAll(".about .boxes-holder .box span");
const speed = 300;
window.addEventListener("scroll", () => {
    if (window.scrollY >= document.querySelector(".about").offsetTop - 250) {
        counters.forEach((counter) => {
            const updateCount = () => {
                const target = parseInt(+counter.dataset.count);
                const count = parseInt(+counter.innerText);
                const increment = Math.trunc(target / speed);
                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 10);
                } else {
                    count.innerText = target;
                }
            };
            updateCount();
        });
    }
});
