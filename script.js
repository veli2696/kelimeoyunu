
const kelime = "ELMA";
document.getElementById("question").innerText = "Kelime: _ _ _ _";

function checkAnswer() {
    const answer = document.getElementById("answer").value.toUpperCase();
    if (answer === kelime) {
        document.getElementById("result").innerText = "Tebrikler, doğru bildin!";
    } else {
        document.getElementById("result").innerText = "Yanlış tahmin, tekrar dene.";
    }
}
