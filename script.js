// Initial binary search range
let low = 1;
let high = 100;
let guess = Math.floor((low + high) / 2);

// Show the initial guess
document.getElementById("guess").textContent = guess;

function updateGuess() {
    guess = Math.floor((low + high) / 2);
    document.getElementById("guess").textContent = guess;
}

// If user says guess is too low
function tooLow() {
    low = guess + 1;
    checkGameOver();
    updateGuess();
}

// If user says guess is too high
function tooHigh() {
    high = guess - 1;
    checkGameOver();
    updateGuess();
}

// If guess is correct
function correct() {
    document.getElementById("result").textContent =
        "🎉 I guessed it! Your number is " + guess + "!";
    disableButtons();
}

// Handle invalid situation (user lied?)
function checkGameOver() {
    if (low > high) {
        document.getElementById("result").textContent =
            "😵 Something went wrong! Did you change your number?";
        disableButtons();
    }
}

// Disable buttons after game ends
function disableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
}
