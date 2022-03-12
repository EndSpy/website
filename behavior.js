function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
    document.getElementById("idBgColor").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = currentVal - 1;
    document.getElementById("countDownButton").innerHTML = newVal;
}

if (newVal < 0) {
const  currentVal = 0
const newVal = 0
};



if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.write("on phone");
} else {
    console.log("not on phone");
}