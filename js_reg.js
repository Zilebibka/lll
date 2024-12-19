// Приветствие с запросом имени и возраста
function greetUser() {
    let name = prompt("Введите ваше имя:");
    let age = prompt("Введите ваш возраст:");

    alert(`Привет, ${name}! Вам ${age} лет.`);
    console.log(`Привет, ${name}! Вам ${age} лет.`);
}

// Проверка возраста
function checkAge() {
    let age = prompt("Введите ваш возраст:");
    if (age >= 18) {
        alert("Вы совершеннолетний.");
    } else {
        alert("Вы несовершеннолетний.");
    }
}

// Угадай число
function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = prompt("Угадайте число от 1 до 10:");
    
    if (parseInt(guess) === randomNumber) {
        alert("Поздравляем! Вы угадали число.");
    } else {
        if (parseInt(guess) < randomNumber) {
            alert("Попробуйте большее число.");
        } else {
            alert("Попробуйте меньшее число.");
        }
    }
}

// Проверка пароля
function checkPassword() {
    let password = prompt("Введите пароль:");
    let correctPassword = "12345";
    
    if (password === correctPassword) {
        alert("Доступ разрешен.");
    } else if (password === "") {
        alert("Пароль не может быть пустым.");
    } else {
        alert("Доступ запрещен.");
    }
}

// Простой калькулятор
function simpleCalculator() {
    let num1 = prompt("Введите первое число:");
    let num2 = prompt("Введите второе число:");
    let operator = prompt("Введите оператор (+, -, *, /):");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === "+") {
        alert(num1 + num2);
    } else if (operator === "-") {
        alert(num1 - num2);
    } else if (operator === "*") {
        alert(num1 * num2);
    } else if (operator === "/") {
        if (num2 !== 0) {
            alert(num1 / num2);
        } else {
            alert("На 0 делить нельзя!");
        }
    } else {
        alert("Неверный оператор");
    }
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

window.onload = function() {
    // Часть 1: Работа с DOM
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = "Добро пожаловать на наш сайт!";
    }

    const h2 = document.querySelector('h2');
    if (h2) {
        h2.style.color = 'red';
    }

    const firstParagraph = document.querySelector('p');
    if (firstParagraph) {
        firstParagraph.textContent = "Это новый текст параграфа.";
    }

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

    function submitForm(event) {
        event.preventDefault(); // Останавливаем стандартное поведение формы

        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const comment = document.querySelector('textarea[name="comment"]').value;

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

        formData.name = name;
        formData.email = email;
        formData.phone = phone;
        formData.date = date;
        formData.comment = comment;

        formData.printData();
    }

    document.getElementById('userForm').addEventListener('submit', submitForm);
};
    