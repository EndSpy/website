function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = currentVal - 1;
    document.getElementById("countDownButton").innerHTML = newVal;
}

if (0 > newVal) {
const newVal = 0
};



if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    console.log("on phone")
    document.write("on phone");
} else {
    console.log("not on phone");
    document.write("not")
}


function myfunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "mytopnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}