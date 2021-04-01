
function check() {
    var username = document.getElementById("User").value;
    var password = document.getElementById("Pass").value;
    var login = document.getElementById("Login");

    if(username == "Username" && password == "Password") {
        login.innerHTML = "Success!";
    }
    else {
        login.innerHTML = "Wrong information";
    }
}