var emailFeild = document.getElementById("input-email");
var passFeild = document.getElementById("input-pass");
var warnIconEmail = document.getElementById("warn-icon-email");
var checkIconEmail = document.getElementById("check-icon-email");
var warnIconPass = document.getElementById("warn-icon-pass");
var checkIconPass = document.getElementById("check-icon-pass");
var confirmPass = document.getElementById("input-confirm-pass");
var inputStudentStatus = document.getElementById("input-student-status");
var inputID = document.getElementById("input-id");
var inputDepartment = document.getElementById("input-department");
var inputSchool = document.getElementById("input-school");

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
    
}
function validateConfirmPass() {
    if (passFeild.value == "") {
        confirmPass.style.boxShadow = "0px 0px 20px red";
        return true;
    }
    else if (passFeild.value == confirmPass.value) {
        confirmPass.style.boxShadow = "0px 0px 20px green";
        return true;
    }
    else {
        confirmPass.style.boxShadow = "0px 0px 20px red";
        return false;        
    }
}

function validateStudentStatus() {
    if(inputStudentStatus.value == "Current Student"){
        inputStudentStatus.style.boxShadow = "0px 0px 20px Green";
        return true;
    }
    else if(inputStudentStatus.value == "Alumni"){
        inputStudentStatus.style.boxShadow = "0px 0px 20px Green";
        return true;
    }
    else {
        inputStudentStatus.style.boxShadow = "0px 0px 20px red";
        return false;
    }
}

function validateID(){
    if (inputID.value == "") {
        inputID.style.boxShadow = "0px 0px 20px red";
        return false;
    }
    else if (inputID.value.length == 10) {
        inputID.style.boxShadow = "0px 0px 20px green";
        return true;
    }
    else {
        inputID.style.boxShadow = "0px 0px 20px red";
        return false;        
    }
}

function validateDepartment(){
    if(inputDepartment.value == "Department"){
        inputDepartment.style.boxShadow = "0px 0px 20px red";
        return true;
    }
    else {
        inputDepartment.style.boxShadow = "0px 0px 20px green";
        return false;
    }
}
function validateSchool(){
    if(inputSchool.value == "School"){
        inputSchool.style.boxShadow = "0px 0px 20px red";
        return true;
    }
    else {
        inputSchool.style.boxShadow = "0px 0px 20px green";
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