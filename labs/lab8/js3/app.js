var sdiv = document.getElementById("square");

sdiv.style.backgroundColor = "rgb(66, 245, 81)";
sdiv.style.width = "100px";
sdiv.style.height = "100px";

function change() {
    var bigger = parseInt(sdiv.style.width) * 1.1;

    sdiv.style.width = bigger + "px";
    sdiv.style.height = bigger + "px";


}