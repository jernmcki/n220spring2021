var amount = document.getElementById("Bill");

function calculator() {
    var enteredamount = Number(amount.value);

    if(isNaN(enteredamount)) {
        console.log("Please enter a valid number");
    }
    else {
        var tip = (enteredamount * 0.2);
        var total = (tip + enteredamount);
        console.log("Tip: " + tip + ". " + "Total: " + total);

    }
    
}