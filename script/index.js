var btn = document.getElementsByClassName("menu-btn");
var content = document.getElementsByClassName("menu-content");
var flag = [false, false, false, false, false, false, false];
function toggle(i) {
    return function () {
        if (!flag[i]) {
            for (var j = 0; j < btn.length; j++) {
                if (j !== i) {
                    if (flag[j]) {
                        btn[j].style.backgroundColor = "transparent";
                        content[j].style.display = "none";
                        flag[j] = false;
                    }
                }
            }
            btn[i].style.backgroundColor = "rgb(26, 26, 26)";
            content[i].style.display = "block";
            flag[i] = true;
        }
        else {
            btn[i].style.backgroundColor = "transparent";
            content[i].style.display = "none";
            flag[i] = false;
        }
    }
}
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", toggle(i));
}
document.getElementsByClassName("block-1")[0].addEventListener("click", function () {
    for (var i = 0; i < btn.length; i++) {
        if (flag[i]) {
            btn[i].style.backgroundColor = "transparent";
            content[i].style.display = "none";
            flag[i] = false;
        }
    }
});


var slideIndex = 1;
var slides = document.getElementsByClassName("fade");
var dots = document.getElementsByClassName("dot");
var t;
document.getElementsByClassName("prev")[0].addEventListener("click", plusSlides(-1));
document.getElementsByClassName("next")[0].addEventListener("click", plusSlides(1));
for (i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", currentSlide(i + 1));
}
showSlidesAuto();

function plusSlides(n) {
    return function () {
        showSlides(slideIndex += n);
    }
}
function currentSlide(n) {
    return function () {
        showSlides(slideIndex = n);
    }
}
function showSlides(n) {
    var i;

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
function showSlidesAuto() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    t = setTimeout(showSlidesAuto, 7000);
}

function onPause() {
    if (this.innerHTML === "") {
        this.innerHTML = "";
        clearTimeout(t);
    } else {
        this.innerHTML = "";
        t = setTimeout(showSlidesAuto, 7000);
    }
}
var pause = document.getElementsByClassName("pause")[0];
pause.addEventListener("click", onPause);

var block1 = document.getElementsByClassName("block-1")[0];
var nav = document.getElementsByClassName("nav-page")[0];
var block3 = document.getElementsByClassName("block-3")[0];
var bg3 = document.getElementsByClassName("bg-3")[0];
var videos = document.getElementsByClassName("video");
function getElementTop(e) {
    var t = e.offsetTop, c = e.offsetParent, h;
    while (c !== null) {
        t += c.offsetTop;
        c = c.offsetParent;
    }
    if (document.compatMode === "BackCompat") {
        h = document.body.scrollTop;
    } else {
        h = document.documentElement.scrollTop;
    }
    return t - h;
}
window.addEventListener("scroll", function () {
    bg3.style.transform = "translate(-50%, " + ((getElementTop(block3) + 760) / 15.65 - 500) + "px) scale(1.5, 1.5)";
    if (-getElementTop(block1) >= 760) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }

});