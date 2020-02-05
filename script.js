//100 digits of pi. (minus the 3. bit)
const pi = "141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067";

var inputField = document.getElementById("input");
var piDigits = document.getElementById("piDigits");
var mistakeCounter = document.getElementById("mistakes");
var feedBack = document.getElementById("feedback");

var piPosition = 0;
var mistakes = 0;
var maxMistakes = 5;
var tellAnswer = false;

function enterAnswer() {
    let num = parseInt(inputField.value);
    if (!isNaN(num)) {
        if (piPosition > 99) {
            feedback("You know 100 digits of pi!", 9999);
            console.log("Digits of pi ran out");

        }
        if (num == pi[piPosition]) {
            piPosition++;
            piDigits.innerHTML = "" + piDigits.innerHTML.substring(0, piDigits.innerHTML.length - 1) + num + "?";
        }
        else {
            if (tellAnswer) {
                feedback("Incorrect! Answer is: " + pi[piPosition], 999)
            }
            else {
                feedback("Incorrect!", 999)
            }
            mistakes++;
            if (mistakes > maxMistakes) {
                gameOver();
            }
            mistakeCounter.innerHTML = "Mistakes Left: " + (maxMistakes - mistakes);

        }
    }
    else {
        feedback("Not A Number");

    }
    inputField.value = "";
}
function feedback(msg, time) {
    feedBack.innerHTML = msg;
    $("#feedback").fadeIn().delay(time).fadeOut();
}
function answerToggle() {
    tellAnswer = !tellAnswer;
}
function gameOver() {
    feedback("Game Over! Score: " + piPosition, 5555);
    reset();
}
function reset() {
    piDigits.innerHTML = "3.?";
    mistakes = 0;
    piPosition = 0;
    inputField.value = "";
    mistakeCounter.innerHTML = "Mistakes Left: " + (maxMistakes - mistakes);

}

reset();