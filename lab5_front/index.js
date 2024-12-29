// Завдання 1: Перевірка форми через регулярні вирази
document.getElementById("submitForm").addEventListener("click", () => {
    // Отримання полів
    const faculty = document.getElementById("faculty");
    const birthdate = document.getElementById("birthdate");
    const address = document.getElementById("address");
    const email = document.getElementById("email");
    const telegram = document.getElementById("telegram");

    // Регулярні вирази для перевірки
    const facultyRegex = /^[А-Яа-яA-Za-z\s]{4,}$/; // Мінімум 4 символи
    const birthdateRegex = /^\d{2}\.\d{2}\.\d{4}$/; // Формат чч.чч.чччч
    const addressRegex = /^м\.\s[A-Za-zА-Яа-я\s]{2,}$/; // м. Текст
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email стандартний
    const telegramRegex = /^@\w{3,}$/; // @ + мінімум 3 символи

    // Перевірка полів
    const fields = [
        {field: faculty, regex: facultyRegex},
        {field: birthdate, regex: birthdateRegex},
        {field: address, regex: addressRegex},
        {field: email, regex: emailRegex},
        {field: telegram, regex: telegramRegex},
    ];

    let isValid = true;

    fields.forEach(({field, regex}) => {
        if (!regex.test(field.value)) {
            field.classList.add("error");
            isValid = false;
        } else {
            field.classList.remove("error");
        }
    });

    // Виведення результату
    if (isValid) {
        alert("Введена інформація правильна:\n" +
            `Факультет: ${faculty.value}\nДата народження: ${birthdate.value}\n` +
            `Адреса: ${address.value}\nEmail: ${email.value}\nTelegram: ${telegram.value}`);
    } else {
        alert("Будь ласка, виправте помилки.");
    }
});

// Завдання 2: Створення таблиці
const table = document.getElementById("grid");
const n = 1; // Ваш номер варіанта
const rows = 6, cols = 6;
le
