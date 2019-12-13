// Generator random password

function generate() {
    // set password length/ complexity
    var complexity = document.getElementById("slider").Value;

    //possible password values 
    var Value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqurstuvwxyz1234567890!@#$%&*^()_+";
    var password = "";

    //create for loop to choose password characters
    for (var i = 0; i <= complexity; i++) {
        password = password + Value.charAt(Math.floor(Math.random() * Math.floor(Value.length - 1)));
    }
    //add password to textbook/display area 
    document.getElementById("display").Value = password
}
