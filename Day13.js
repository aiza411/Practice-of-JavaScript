document.getElementById("submitBtn").addEventListener("click", function () {
  var GuessNumber = 10;
  let number = document.getElementById("number");
  var value = parseInt(number.value);

  let message = document.createElement("p");
  var existingAnswer = document.getElementById("NumberCard").querySelector("p");
  if (existingAnswer) {
    existingAnswer.remove();
  }

  if (value < GuessNumber) {
    message.style.marginTop = "10px";
    message.textContent = "Guess A Higher Number";
    document.getElementById("NumberCard").appendChild(message);
  } else if (value > GuessNumber) {
    message.style.marginTop = "10px";
    message.textContent = "Guess A Lower Number";
    document.getElementById("NumberCard").appendChild(message);
  } else if (value == GuessNumber) {
    message.style.marginTop = "10px";
    message.textContent = "CONGRATS! YOU HAVE GUESSED THE NUMBER";
    document.getElementById("NumberCard").appendChild(message);
  }
});
