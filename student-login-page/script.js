var emailFeild = document.getElementById("input-email");
var passFeild = document.getElementById("input-pass");
var emailIcon = document.getElementById("email-icon");
var passIcon = document.getElementById("pass-icon");
var warnIconEmail = document.getElementById("warn-icon-email");
var checkIconEmail = document.getElementById("check-icon-email");
var warnIconPass = document.getElementById("warn-icon-pass");
var checkIconPass = document.getElementById("check-icon-pass");

var emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
var passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;


function validateEmail() {
    if (emailFeild.value == "") {
        // emailFeild.style.border = "none";
        // emailFeild.style.backgroundColor = "white";
        // emailIcon.style.color = "grey";
        warnIconEmail.style.display = "none"
        checkIconEmail.style.display = "none"
    }
    else if (!emailFeild.value.match(emailRegex)) {
        // emailFeild.style.backgroundColor = "#b83838";
        // emailFeild.style.color = "white";
        // emailIcon.style.color = "white";
        warnIconEmail.style.display = "inline"
        checkIconEmail.style.display = "none"
    }
    else {
        // emailFeild.style.backgroundColor = "#32a345";
        // emailFeild.style.color = "white";
        // emailIcon.style.color = "white";
        warnIconEmail.style.display = "none"
        checkIconEmail.style.display = "inline"
    }
}

function validatePass() {
    if (passFeild.value == "") {
        // passFeild.style.border = "none";
        // passFeild.style.backgroundColor = "white";
        // passIcon.style.color = "grey";
        warnIconPass.style.display = "none"
        checkIconPass.style.display = "none"
    }
    else if (!passRegex.test(passFeild.value)) {
        // passFeild.style.backgroundColor = "#b83838";
        // passFeild.style.color = "white";
        // passIcon.style.color = "white";
        warnIconPass.style.display = "inline"
        checkIconPass.style.display = "none"
    }
    else {
        // passFeild.style.backgroundColor = "#32a345";
        // passFeild.style.color = "white";
        // passIcon.style.color = "white";
        warnIconPass.style.display = "none"
        checkIconPass.style.display = "inline"
    }
}