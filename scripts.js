function generate() {

    var complexity = document.getElementById("slider").nodeValue;

    var Values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqurstuvwxyz1234567890!@#$%&*^()_+";
    var password = "";

    for (var i = 0; i <= complexity; i++) {
        password = password + Values.charAt(Math.floor(Math.random() * Math.floor(Values.length - 1)));
    }

    document.getElementById("display").Value = password;
}
 
document.getElementById("length").innerHTML = "Length: 50"
document.getElementById("slider").oninput - function(){
    if (document.getElementById("slider").Value > 0){
        document.getElementById("length").innerHTML = "Length :" +document.getElementById("slider").Value;
    }

}


