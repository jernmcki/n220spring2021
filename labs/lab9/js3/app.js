let objects = [
    {color: "#FF0000", height: 200, width: 300},
    {color: "#FFFF00", height: 200, width: 300},
    {color: "#ff0000", height: 200, width: 300}

];


for(var i = 0; i < objects.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = objects[i].color;
    newDiv.style.height = objects[i].height + "px";
    newDiv.style.width = objects[i].width + "px";
    newDiv.style.float = "left";
    document.body.appendChild(newDiv);

}



