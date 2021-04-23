var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

div1.style.height = "200px";
div2.style.height = "200px";
div3.style.height = "200px";

div1.style.width = "200px";
div2.style.width = "200px";
div3.style.width = "200px";

div1.style.backgroundColor = "rgb(177, 179, 177)";
div2.style.backgroundColor = "rgb(177, 179, 177)";
div3.style.backgroundColor = "rgb(177, 179, 177)";

div1.style.float = "left";
div2.style.float = "left";
div3.style.float = "left";

div1.style.margin = "10px";
div2.style.margin = "10px";
div3.style.margin = "10px";



function change(event) {
    var color = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color;

}