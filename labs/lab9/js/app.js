var stepCount = [16, 22, 20, 30];
var sum = 0;
var total = document.getElementById("sum");
var average = document.getElementById("average");


for(var i = 0; i < stepCount.length; i++) {
    var curNumber = stepCount[i];
    var sum = sum + curNumber;
}

averageNum = sum / stepCount.length;


total.innerHTML = sum;
average.innerHTML = averageNum;