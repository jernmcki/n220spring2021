
function check() {
    var bad = document.getElementById("bad");
    var howmany = document.getElementById("howmany");
    var counter = 0;
    var badword = false;
    var input = document.getElementById('userinput').value;
    console.log(input);
    var splitString = input.split(" ");
    console.log(splitString);

    for(var i = 0; i < splitString.length; i++) {
        var curWord = splitString[i]
        if(curWord == "bear" || curWord == "dog" || curWord == "wolf") {
            badword = true;
            counter = counter + 1;
        }
    }
    if(badword == true) {
        bad.innerHTML = "Bad words were found in your text";

    }
    if(badword == false) {
        bad.innerHTML = "No bad words were found in your text";

    }
    
    howmany.innerHTML = counter + " to be exact";

}