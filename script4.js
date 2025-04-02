document.addEventListener("DOMContentLoaded", function () {
    const clientsSection = document.querySelector(".clients-section");

    if (!clientsSection) {
        console.error("Блок .clients-section не найден!");
        return;
    }

    function handleScroll() {
        const sectionTop = clientsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            clientsSection.classList.add("visible");
            window.removeEventListener("scroll", handleScroll); 
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
});


const options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.1 
};

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('visible'); и
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, options);

const sections = document.querySelectorAll('.content, .process, .why');

sections.forEach(section => {
    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function () {
    const headerBackground = document.querySelector(".header-background");

    if (!headerBackground) {
        console.error("Блок .header-background не найден!");
        return;
    }

    setTimeout(() => {
        headerBackground.classList.add("visible");
    }, 100);
});
