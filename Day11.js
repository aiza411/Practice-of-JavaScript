document.getElementById("addBtn").addEventListener("click", function () {
  let answer = document.createElement("p");
  answer.textContent = "";

  var num1 = document.getElementById("number1");
  var num2 = document.getElementById("number2");

  var value1 = parseInt(num1.value);
  var value2 = parseInt(num2.value);

  console.log(value1);
  console.log(value2);

  let sum = value1 + value2;

  var existingAnswer = document
    .getElementById("AddCard")
    .querySelector("p");
  if (existingAnswer) {
    existingAnswer.remove();
  }

  answer.style.marginTop = "10px";
  answer.textContent = "Answer : " + sum;
  document.getElementById("AddCard").appendChild(answer);
});

document.getElementById("subtractBtn").addEventListener("click", function () {
  let answer = document.createElement("p");

  var num1 = document.getElementById("number3");
  var num2 = document.getElementById("number4");

  var value1 = parseInt(num1.value);
  var value2 = parseInt(num2.value);

  console.log(value1);
  console.log(value2);

  let sum = value1 - value2;

  var existingAnswer = document
    .getElementById("SubtractCard")
    .querySelector("p");
  if (existingAnswer) {
    existingAnswer.remove();
  }

  answer.style.marginTop = "10px";
  answer.textContent = "Answer : " + sum;
  document.getElementById("SubtractCard").appendChild(answer);
});
