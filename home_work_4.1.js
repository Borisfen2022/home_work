let age = confirm("Есть ли вам 18 лет?");
if (age === false) {
  alert("Вам запрещено проходить опрос");
} else {
  let answer = prompt("Во сколько вы встаете?");
  if (isNaN(answer)) {
    alert("Некорректный ввод");
  } else if (answer > 0 && answer <= 5) {
    alert("Очень рано");
  } else if (answer > 5 && answer <= 8) {
    alert("Всё равно рано");
  } else if (answer > 8 && answer <= 11) {
    alert("Нормально");
  } else if (answer > 11 && answer <= 14) {
    alert("Слишком поздно");
  } else if (answer > 14) {
    alert("Очень-очень поздно");
  } else if (answer <= 0 || answer > 24) {
    alert("Научись пользоваться часами!");
  }
}
