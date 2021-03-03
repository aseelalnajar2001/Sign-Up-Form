//Aseel Zuhair EL-Najjar
function printName() {
    var fName = "Aseel";
    for (i=0;i<=10;i++) {
        console.log (i + " "+ fName.toUpperCase());
    }
}
function validateData() {
    var text="";
    var userName = document.getElementById('user-name').value;
    var password = document.getElementById('passward').value; 
    var email = document.getElementById('email').value;
    if(userName.length != 0|| password.length != 0) {
        if (userName.length < 3 || password.length < 8){
            document.getElementById('error-message').innerHTML= ("You should enter more than 3 characters in user Name field and more than 8 haracter in passward field...");
        }
        else {
            document.getElementById('error-message').innerHTML= ("Oky..This is right...");
        }
        text = "========User Info====== " + "\n" + "user name is:" + userName + "\n" + "passward is: " + passward +"\n" +"email is: " + email;
        return text;
    }
    else {
        document.getElementById('error-message').innerHTML= ("You must enter value in user name and passward..");
        return text;
    }
}
function printInfo() {
    printName();
    var result = validateData();
    if(result) {
        console.log(result);
    }
}