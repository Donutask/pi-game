//1000 digits of pi. (minus the 3. bit)
const pi = "141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198";

var inputField = document.getElementById("input");
var piDigits = document.getElementById("piDigits");
var mistakeCounter = document.getElementById("mistakes");
var feedBack = document.getElementById("feedback");

var piPosition = 0;
var startPos = 0;
var mistakes = 0;
var maxMistakes = 5;
var tellAnswer = false;

var feedbackCurrecntlyShown = false;

var modal =  document.getElementById("modal");
var scoreText =  document.getElementById("modalText");

function enterAnswer() {
    let num = parseInt(inputField.value);
    if (!isNaN(num)) {
        if (piPosition >= 999) {
            feedBack.innerHTML = "You know 1000 digits of pi! OUTSTANDING!!";
            feedback(999);
            console.log("Digits of pi ran out");

        }
        if (num == pi[piPosition]) {
            piPosition++;
            piDigits.innerHTML = "" + piDigits.innerHTML.substring(0, piDigits.innerHTML.length - 1) + num + "?";
        }
        else {
            if (tellAnswer) {
                feedBack.innerHTML = "Incorrect! Answer is: " + pi[piPosition];
                feedback(999);
            }
            else {
                feedBack.innerHTML = "Incorrect!";
                feedback(555);
            }
            mistakes++;
            if (mistakes > maxMistakes) {
                gameOver();
            }
            mistakeCounter.innerHTML = "Mistakes Left: " + (maxMistakes - mistakes);

        }
    }
    else {
        feedBack.innerHTML = "Not A Number";
        feedback(555);
    }
    inputField.value = "";
}
function feedback(time) {
    $("#feedback").fadeIn(99).delay(time).fadeOut(99);
}
function answerToggle() {
    tellAnswer = !tellAnswer;
}

   

function gameOver() {
   modal.style.display = "block";
   scoreText.innerHTML = "You scored: " + piPosition +"!";
}
function reset() {
    modal.style.display = "none";
//gets value from max mistakes box
    let num = parseInt(document.getElementById("lives").value);
    if (!isNaN(num)) {
        maxMistakes = num;   
    }
    mistakeCounter.innerHTML = "Mistakes Left: " + maxMistakes;

    piDigits.innerHTML = "3.?";
    mistakes = 0;
    piPosition = 0;
    startPos = parseInt(document.getElementById("startAt").value);
    piPosition = startPos;
    piDigits.innerHTML = "3." + pi.substring(0, startPos) + "?";
    inputField.value = "";
    mistakeCounter.innerHTML = "Mistakes Left: " + (maxMistakes - mistakes);
}
// stop number increment on scroll
// disable mousewheel on a input number field when in focus
// (to prevent Cromium browsers change the value when scrolling)
$('form').on('focus', 'input[type=number]', function (e) {
    $(this).on('wheel.disableScroll', function (e) {
      e.preventDefault()
    })
  })
  $('form').on('blur', 'input[type=number]', function (e) {
    $(this).off('wheel.disableScroll')
  })
reset();
