const heightElement = document.querySelector('#height');
const weightElement = document.querySelector('#weight');
const resultElement = document.querySelector('#result');
const interpretationElement = document.querySelector('#interpretation');
const buttonElement = document.querySelector('#calculate');

const btnClickHandler = () => {

    const height = parseFloat(heightElement.value) / 100;
    const weight = parseFloat(weightElement.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter acceptable height and weight values.');
        return;
    }

    const bmi = weight / (height * height);
    resultElement.textContent = `Your BMI: ${bmi.toFixed(1)}`;

    let interpretation = '';
    if (bmi < 18.5) {
        interpretation = 'Underweight';
    } else if (bmi < 24.9) {
        interpretation = 'Normal weight';
    } else if (bmi < 29.9) {
        interpretation = 'Overweight';
    } else {
        interpretation = 'Obesity';
    }
    interpretationElement.textContent = `BMI corresponds to: ${interpretation}`;
}

buttonElement.addEventListener('click', btnClickHandler);