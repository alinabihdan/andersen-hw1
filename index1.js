const firstResult = prompt("введите число", 0);
const secondResult = prompt("введите систему счисления", 0);

if (isNaN(+firstResult) || isNaN(+secondResult)) {
  alert("Некорректный ввод!");
} else {
  alert(Number(firstResult).toString(secondResult));
}

// #2

const firstNumber = +prompt("введите первое число");
const secondNumber = +prompt("введите второе число");

if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
  alert(`Ответ: ${firstNumber + secondNumber}, ${firstNumber / secondNumber}`);
} else {
  alert("Некорректный ввод!");
}
