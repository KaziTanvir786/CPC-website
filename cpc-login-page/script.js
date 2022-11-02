var emailFeild = document.getElementById("input-email");
var passFeild = document.getElementById("input-pass");
var warnIconEmail = document.getElementById("warn-icon-email");
var checkIconEmail = document.getElementById("check-icon-email");
var warnIconPass = document.getElementById("warn-icon-pass");
var checkIconPass = document.getElementById("check-icon-pass");
var loginBtn = document.getElementById("id-login-btn");

var emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

// var isEmailValid = false;
// var isPassValid = false;

function validateEmail() {
    if (emailFeild.value == "") {
        emailFeild.style.boxShadow = "none";
        warnIconEmail.style.display = "none";
        checkIconEmail.style.display = "none";
        // isEmailValid = false;
        return false;
    }
    else if (!emailFeild.value.match(emailRegex)) {
        emailFeild.style.boxShadow = "0px 0px 20px red";
        warnIconEmail.style.display = "inline";
        checkIconEmail.style.display = "none";
        // isEmailValid = false;
        return false;
    }
    else {
        emailFeild.style.boxShadow = "none";
        warnIconEmail.style.display = "none";
        checkIconEmail.style.display = "inline";
        // isEmailValid = true;
        return true;
    }
}

function validatePass() {
    if (passFeild.value == "") {
        passFeild.style.boxShadow = "none";
        warnIconPass.style.display = "none";
        checkIconPass.style.display = "none";
        // isPassValid = false;
        return false;
    }
    else if (passFeild.value.length > 3) {
        passFeild.style.boxShadow = "none";
        warnIconPass.style.display = "none";
        checkIconPass.style.display = "inline";
        // isPassValid = true;
        return true;
    }
    else {
        passFeild.style.boxShadow = "0px 0px 20px red";
        warnIconPass.style.display = "inline";
        checkIconPass.style.display = "none";
        // isPassValid = false;
        return false;        
    }
}

// // Add some codes to check the captcha also in this function
// emailFeild.oninput = function () {
//     validateEmail();
//     if (isEmailValid && isPassValid) {
//         loginBtn.disabled = false;
//     }
//     else {
//         loginBtn.disabled = true;
//     }
// }

// // Add some codes to check the captcha also in this function
// passFeild.oninput = function () {
//     validatePass();
//     if (isEmailValid && isPassValid) {
//         loginBtn.disabled = false;
//     }
//     else {
//         loginBtn.disabled = true;
//     }
// }

function check(){
    if(validateEmail()){
        if(validatePass()){
            return true;
        }
        return false;
    }
    return false;
}