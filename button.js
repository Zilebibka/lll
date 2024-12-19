function openForm() {
    document.getElementById('formPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeForm() {
    document.getElementById('formPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Функция плавной прокрутки к началу страницы
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Показываем кнопку при прокрутке вниз более чем на 200px
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});
