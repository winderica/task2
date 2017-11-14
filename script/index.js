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