function generate() {

    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "1234567890";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var specialCharacter = "!@#$%&*^()_+";
    var password = "";

    var passwordLength = parseInt(prompt("How many character do you want(8-120)?"))

    var capitalLetter = confirm("capitals?")
    var number = confirm("numbers?")
    var lowercase = confirm("lowercase?")
    var character = confirm("special characters?")
    var Values = "";

    if (capitalLetter === true) {
        Values = Values + upper

    }
    if (number === true) {
        Values = Values + numeric

    }
    if (lowercase === true) {
        Values = Values + lower

    }
    if (character === true) {
        Values = Values + specialCharacter

    }
    for (var i = 0; i <= passwordLength; i++) {
        password = password + Values.charAt(Math.floor(Math.random() * Math.floor(Values.length - 1)));
    }
console.log(password);
    document.getElementById("password").value = password;
    

}
generate();// att a click event to this function 
