// Задание 1: Объявление переменных и условные операторы
function runTask1() {
    let name = prompt("Введите ваше имя:");
    let age = prompt("Введите ваш возраст:");

    if (age >= 18) {
        alert(`Привет, ${name}. Вы совершеннолетний.`);
        console.log("Вы совершеннолетний");
    } else {
        alert(`Привет, ${name}. Вы несовершеннолетний.`);
        console.log("Вы несовершеннолетний");
    }
}

// Задание 2: Циклы
function runTask2() {
    console.log("Цикл for - вывод чисел от 1 до 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    console.log("Цикл while - вывод чисел от 10 до 1:");
    let j = 10;
    while (j >= 1) {
        console.log(j);
        j--;
    }
}

// Задание 3: Работа с массивами
function runTask3() {
    const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
    const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

    // Добавляем новые темы с помощью push()
    lectures.push('Тема 4');
    practices.push('Практика 4');

    // Добавляем новые темы с помощью unshift()
    lectures.unshift('Тема 0');
    practices.unshift('Практика 0');

    console.log("Все темы лекций:");
    lectures.forEach(function(item) {
        console.log(item);
    });

    console.log("Все темы практик:");
    practices.forEach(function(item) {
        console.log(item);
    });

    // Функция для вывода массива в строку через запятую
    function printArray(arr) {
        console.log(arr.join(', '));
    }

    console.log("Темы лекций через запятую:");
    printArray(lectures);
    console.log("Темы практик через запятую:");
    printArray(practices);
}

// Задание 4: Манипуляции с массивами
function runTask4() {
    const lectures = ['Операционные системы', 'Тема 1', 'Основы программирования', 'Объектно-ориентированное программирование'];

    // Фильтруем темы, начинающиеся с "О"
    function filterLecturesByO(lectures) {
        return lectures.filter(function(item) {
            return item[0] === 'О';  // Проверяем, начинается ли тема с буквы "О"
        });
    }

    const filteredLectures = filterLecturesByO(lectures);

    console.log("Темы лекций, начинающиеся на 'О':");
    console.log(filteredLectures);
}

// Функция прокрутки к началу страницы
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Показываем кнопку "Вверх" при прокрутке
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});
