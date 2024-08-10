let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = document.getElementById("guess").value;
    let result = document.getElementById("result");
    let hint = document.getElementById("hint");

    if (guess === "") {
        result.textContent = "Please enter a number.";
        return;
    }

    attempts++;

    if (guess == randomNumber) {
        result.textContent = "Congratulations! You guessed the number in " + attempts + " attempts.";
        result.style.color = "lime";
        hint.textContent = "";
    } else if (guess > randomNumber) {
        result.textContent = "Too high!";
        hint.textContent = "Try a smaller number.";
    } else {
        result.textContent = "Too low!";
        hint.textContent = "Try a bigger number.";
    }
}
