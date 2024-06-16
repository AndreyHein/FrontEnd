// Выделяем нужный нам элемент
const mainHeaderOfDoc = document.querySelector('.main-header');
console.log(mainHeaderOfDoc);


const textElement = document.querySelector('.text'); // находит только первый
// textElement.textContent = "Test of text";
const textElementAll = document.querySelectorAll('.text'); // находит все, создает NodeList (массив с урезанной функциональностью)
console.log([...textElementAll]); // превращаем в обычный массив спред оператором

console.log(textElementAll.length);

// изменяем элемент

mainHeaderOfDoc.textContent = "DOM - Document Object Model";

// а здесь для списка элементов (нод)
for (let i = 0; i < textElementAll.length; i++) {
    textElementAll[i].textContent = "Работаем в цикле";
}

// добавляем удаляем классы
mainHeaderOfDoc.classList.add('add-font-color');
mainHeaderOfDoc.classList.remove('main-header');

// добавляем элементы
const testLinkElement = document.createElement('a');
testLinkElement.href = 'http://google.com';
testLinkElement.textContent = 'Ссылка на Гугл';

textElement.append(testLinkElement);

// удаляем элемент
// mainHeaderOfDoc.remove();
// textElement.innerHTML = '';
// textElement.textContent = '';

// input тоже используем
constinputElement = document.querySelector('#test-input');

// Работаем с кнопкой
const buttonElement = document.querySelector('#test-button');
console.log(buttonElement);

const btnClickHandler = () => {
    console.log('Button Click!!!');
    const textFromInput = InputEvent.value;
    mainHeaderOfDoc.textContent = `Мы ввели в input ${textFromInput}`;
}

buttonElement.addEventListener('click', btnClickHandler);


