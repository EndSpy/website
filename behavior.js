function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
    document.getElementById("idBgColor").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = currentVal - 1;
    document.getElementById("countDownButton").innerHTML = newVal;
}

if (newVal <= 0) {
Set (newVal = 0)
};