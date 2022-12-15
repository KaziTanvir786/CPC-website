var emailFeild = document.getElementById("input-email");
var passFeild = document.getElementById("input-pass");
var warnIconEmail = document.getElementById("warn-icon-email");
var checkIconEmail = document.getElementById("check-icon-email");
var warnIconPass = document.getElementById("warn-icon-pass");
var checkIconPass = document.getElementById("check-icon-pass");

var emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function validateEmail() {
    if (emailFeild.value == "") {
        emailFeild.style.boxShadow = "none";
        warnIconEmail.style.display = "none";
        checkIconEmail.style.display = "none";
        return false;
    }
    else if (!emailFeild.value.match(emailRegex)) {
        emailFeild.style.boxShadow = "0px 0px 20px red";
        warnIconEmail.style.display = "inline";
        checkIconEmail.style.display = "none";
        return false;
    }
    else {
        emailFeild.style.boxShadow = "none";
        warnIconEmail.style.display = "none";
        checkIconEmail.style.display = "inline";
        return true;
    }
}

function validatePass() {
    if (passFeild.value == "") {
        passFeild.style.boxShadow = "none";
        warnIconPass.style.display = "none";
        checkIconPass.style.display = "none";
        return false;
    }
    else if (passFeild.value.length > 3) {
        passFeild.style.boxShadow = "none";
        warnIconPass.style.display = "none";
        checkIconPass.style.display = "inline";
        return true;
    }
    else {
        passFeild.style.boxShadow = "0px 0px 20px red";
        warnIconPass.style.display = "inline";
        checkIconPass.style.display = "none";
        return false;        
    }
}

function check(){
    if(validateEmail()){
        if(validatePass()){
            return true;
        }
        return false;
    }
    return false;
}