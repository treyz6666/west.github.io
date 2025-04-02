// Настройка Intersection Observer
const options = {
    root: null, // Наблюдаем за видимостью относительно окна браузера
    rootMargin: '0px', // Отступы от границ окна (можно изменить)
    threshold: 0.1 // 10% блока должно быть видимо, чтобы сработала анимация
};

// Функция, которая добавляет класс 'visible' при видимости блока
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Если блок видим
            entry.target.classList.add('visible'); // Добавляем класс для анимации
            observer.unobserve(entry.target); // Останавливаем наблюдение после анимации
        }
    });
};

// Создание нового наблюдателя
const observer = new IntersectionObserver(handleIntersection, options);

// Находим все блоки, которые должны анимироваться
const sections = document.querySelectorAll('.content, .process, .why');

// Начинаем наблюдение за каждым из блоков
sections.forEach(section => {
    observer.observe(section);
});
