const sum = (a, b) => a + b;
const min = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const quiz = () => {
  const a = +prompt("Введитепервое первое число");
  const b = +prompt("Введитепервое второе число");
  const оperation = prompt("Введите операцию");

  if (isNaN(a) || isNaN(b)) {
    quiz();
  }

  if (оperation === "+") {
    alert(sum(a, b));
  } else if (оperation === "-") {
    alert(min(a, b));
  } else if (оperation === "/") {
    alert(div(a, b));
  } else if (оperation === "*") {
    alert(mult(a, b));
  } else {
    alert('Enter another operation (One of this"+", "-", "/", "*")');
    quiz();
  }
};

quiz();
