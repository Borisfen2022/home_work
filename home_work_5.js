let i = 0;
while (true) {
  ++i;
  let answer = prompt("Введите слово");
  if (answer === "break") break;
  alert(i);

  if (answer === "continue") {
    continue;
  }
}
