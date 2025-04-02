function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для анимации элементов
function animateOnScroll() {
    const benefitItems = document.querySelectorAll('.benefit-item');
    const buttons = document.querySelectorAll('.benefit-item button');

    // Проверяем все элементы
    benefitItems.forEach((item) => {
        if (isElementInView(item)) {
            item.classList.add('visible');
        }
    });

    buttons.forEach((button) => {
        if (isElementInView(button)) {
            button.classList.add('visible');
        }
    });
}

// Запуск анимации при скролле
window.addEventListener('scroll', animateOnScroll);

// Выполним проверку сразу, чтобы анимация сработала на уже видимые элементы
window.addEventListener('load', animateOnScroll);


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

const headerBackground = document.querySelector('.header-background');
observer.observe(headerBackground);