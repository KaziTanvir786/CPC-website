var emailFeild = document.getElementById("input-email");
var passFeild = document.getElementById("input-pass");
var emailIcon = document.getElementById("email-icon");
var passIcon = document.getElementById("pass-icon");
var emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
var passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;


function validateEmail() {
    if (emailFeild.value == "") {
        emailFeild.style.border = "none";
        emailFeild.style.backgroundColor = "white";
        emailIcon.style.color = "grey";
    }
    else if (!emailFeild.value.match(emailRegex)) {
        emailFeild.style.backgroundColor = "#b83838";
        emailFeild.style.color = "white";
        emailIcon.style.color = "white";
    }
    else {
        emailFeild.style.backgroundColor = "#32a345";
        emailFeild.style.color = "white";
        emailIcon.style.color = "white";
    }
}

function validatePass() {
    if (passFeild.value == "") {
        passFeild.style.border = "none";
        passFeild.style.backgroundColor = "white";
        passIcon.style.color = "grey";
    }
    else if (!passRegex.test(passFeild.value)) {
        passFeild.style.backgroundColor = "#b83838";
        passFeild.style.color = "white";
        passIcon.style.color = "white";
    }
    else {
        passFeild.style.backgroundColor = "#32a345";
        passFeild.style.color = "white";
        passIcon.style.color = "white";
    }
}