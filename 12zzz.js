// Функция для отображения сообщения в консоли
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none') ? '' : 'none';
    }
}

// Функция для извлечения параметра utm_term из URL и замены текста H1
function updateH1FromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');
    
    if (utmTerm) {
        h1.textContent = utmTerm;
    }
}

// Функция для вывода текущего времени в консоль
function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Функция для сброса цвета фона на исходный
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}
