document.addEventListener("DOMContentLoaded", function () {
    const successSection = document.querySelector(".success-section");
    const benefitsSection = document.querySelector(".benefits");

    if (!successSection || !benefitsSection) {
        console.error("Один из блоков не найден!");
        return;
    }

    function handleScroll(section, className) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add(className);
            window.removeEventListener("scroll", () => handleScroll(section, className)); 
        }
    }

    window.addEventListener("scroll", () => handleScroll(successSection, "visible"));
    window.addEventListener("scroll", () => handleScroll(benefitsSection, "visible"));
    
    handleScroll(successSection, "visible");
    handleScroll(benefitsSection, "visible");
});





    document.addEventListener("DOMContentLoaded", function () {
        const cursor = document.createElement("div");
        cursor.classList.add("cursor-light");
        document.body.appendChild(cursor);

        document.addEventListener("mousemove", function (e) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        document.addEventListener("mouseenter", function () {
            cursor.style.opacity = "1";
        });

        document.addEventListener("mouseleave", function () {
            cursor.style.opacity = "0";
        });
    });


function animateCounter(element, start, end, duration) {
    let startTime = null;
    function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = Math.min((timestamp - startTime) / duration, 1);
        let value = progress * (end - start) + start;

        element.textContent = (value / 1000).toFixed(1).replace(".0", "") + "K";

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = (end / 1000).toFixed(1) + "K";
        }
    }
    requestAnimationFrame(updateCounter);
}

document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    animateCounter(counter, 0, 12300, 2000); 
});