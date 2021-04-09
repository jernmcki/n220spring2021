

for (var i = 0; i < 100; i++) {
    var color1 = Math.random() * 255;
    var color2 = Math.random() * 255;
    var color3 = Math.random() * 255;

    var square = document.createElement("div");
    
    square.style.backgroundColor = "rgb("+color1+","+color2+","+color3+")";

    console.log(square.style.backgroundColor)
    square.style.width = "20px";
    square.style.height = "20px";
    square.style.float = "left";
    square.style.margin = "10px"
    document.body.appendChild(square);





}