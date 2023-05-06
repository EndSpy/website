
//js for slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}



function revealTopNavMessage() {
    document.getElementById("hiddenTopNavMessage").style.display = 'block';
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
};


