function buttonpress() {
    document.getElementById("revealedmessage").style.display = 'block';
}

function buttonpress() {
    var currentVal = document.getElementById("countdownbutton").innerHTML;
    var newVal = currentVal - 1;
    document.getElementById("countdownbutton").innerHTML = newVal;
}