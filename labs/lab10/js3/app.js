
function question(event) {
    var test = document.getElementById("questionanswer");
    var answer = event.target.getAttribute("data-answer");
    test.innerHTML = answer;
    console.log(answer);

}