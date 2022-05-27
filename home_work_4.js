// let firstNumber = +prompt("Enter first Number, please", 0);
// let operation = prompt("Enter operation");
// const secondNumber = +prompt("Enter the second number", 0);

// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//   alert("Wrong data");
// } else {
//   if (operation === "+") {
//     alert(`Your result ${firstNumber + secondNumber}`);
//   } else if (operation === "-") {
//     alert(firstNumber - secondNumber);
//   } else if (operation === "*") {
//     alert(firstNumber * secondNumber);
//   } else if (operation === "/") {
//     alert(firstNumber / secondNumber);
//   } else {
//     alert("Incorrect operation");
//   }
// }

let hour = 20;

if (hour < 10 || hour > 18) {
  alert("Офис закрыт.");
}
