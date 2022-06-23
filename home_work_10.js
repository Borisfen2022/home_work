const getSortedAnswers = () => {
  const answers = [];
  while (true) {
    let answer = prompt("Enter your answer");
    if (!answer) break;

    answers.push(answer);
  }

  return answers
    .map((answer) => answer[0].toUpperCase() + answer.slice(1))
    .sort((a,b) => a.length - b.length);
};

console.log(getSortedAnswers());
