const n = 22;
const targetIndex = (n % 10) + 1;

// Відстежуємо перший клік
let clickedElements = new Set();

// Змінюємо кольори за кліком
document.body.addEventListener("click", (e) => {
    const elements = document.querySelectorAll("p, li, ol li");
    if (e.target === elements[targetIndex - 1]) {
        // Використовуємо getElementById()
        toggleColors(e.target, "yellow", "black");
    } else if (Array.from(elements).includes(e.target)) {
        // Використовуємо querySelector()
        toggleColors(e.target, "lightblue", "darkblue");
    }
});

// Функція для перемикання кольорів
function toggleColors(element, bgColor, textColor) {
    if (!clickedElements.has(element)) {
        element.style.backgroundColor = bgColor;
        element.style.color = textColor;
        clickedElements.add(element);
    } else {
        element.style.backgroundColor = "";
        element.style.color = "";
        clickedElements.delete(element);
    }
}

// Зміна зображення
const imgContainer = document.getElementById("image-container");
const img = document.getElementById("dominican-image");
const addButton = document.getElementById("add-image");
const increaseButton = document.getElementById("increase-image");
const decreaseButton = document.getElementById("decrease-image");
const removeButton = document.getElementById("remove-image");

// Додати зображення
addButton.addEventListener("click", () => {
    if (!imgContainer.contains(img)) {
        imgContainer.appendChild(img);
    }
});

// Збільшити зображення
increaseButton.addEventListener("click", () => {
    img.style.width = (img.clientWidth * 1.1) + "px";
});

// Зменшити зображення
decreaseButton.addEventListener("click", () => {
    img.style.width = (img.clientWidth * 0.9) + "px";
});

// Видалити зображення
removeButton.addEventListener("click", () => {
    if (imgContainer.contains(img)) {
        imgContainer.removeChild(img);
    }
});