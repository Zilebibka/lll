window.onload = function() {
    // Часть 1: Работа с DOM

    // 1. Найдите заголовок H1 и измените его текст.
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = "Добро пожаловать на наш сайт!";
    }

    // 2. Измените цвет текста заголовка H2 на красный.
    const h2 = document.querySelector('h2');
    if (h2) {
        h2.style.color = 'red';
    }

    // 3. Найдите и измените текст первого параграфа.
    const firstParagraph = document.querySelector('p');
    if (firstParagraph) {
        firstParagraph.textContent = "Это новый текст параграфа.";
    }

    // 4. Скрыть встроенное видео.
    const video = document.querySelector('video');
    if (video) {
        video.style.display = 'none';
    }

    // Часть 2: Работа с объектами

    let formData = {
        name: '',
        email: '',
        phone: '',
        date: '',
        comment: '',
        printData: function() {
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comment}`);
        }
    };

    // Функция для отправки формы
    function submitForm(event) {
        event.preventDefault(); // Останавливаем стандартное поведение формы

        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const comment = document.querySelector('textarea[name="comment"]').value;

        // Проверки
        if (!name || !email || !comment) {
            alert("Заполните все обязательные поля: имя, email и комментарий.");
            return;
        }

        if (!/^\d+$/.test(phone)) {
            alert("Телефон должен содержать только цифры.");
            return;
        }

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert("Некорректный email.");
            return;
        }

        // Заполнение объекта formData
        formData.name = name;
        formData.email = email;
        formData.phone = phone;
        formData.date = date;
        formData.comment = comment;

        // Вывод данных в консоль
        formData.printData();
    }

    // Добавляем обработчик отправки формы
    document.getElementById('userForm').addEventListener('submit', submitForm);
};

// Функция для прокрутки страницы наверх
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Функция для отображения кнопки "Вверх"
window.onscroll = function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};
