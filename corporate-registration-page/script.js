var emailField = document.getElementById("input-email");
var nameField = document.getElementById("name-field");
var phoneNumberField = document.getElementById("phone-number-field");
var inputLinkedinProfile = document.getElementById("input-linkedin-profile");
var inputAlumni = document.getElementById("input-alumni");
var inputPosition = document.getElementById("input-position");
var inputCompanyName = document.getElementById("input-company-name");
var inputAddress = document.getElementById("input-address");
var inputWebsite = document.getElementById("input-website");
var inputRemarks = document.getElementById("input-remarks");

var emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;


function validateName() {
    if (nameField.value.length > 3) {
        nameField.style.boxShadow = "1px 1px 20px green";
        return false;
    }
    else if(nameField.value.length == 0){
        nameField.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else {
        nameField.style.boxShadow = "1px 1px 20px red";
        return true;
    }
}

function validateEmail() {
    if (emailField.value == "") {
        emailField.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else if (!emailField.value.match(emailRegex)) {
        emailField.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else {
        emailField.style.boxShadow = "1px 1px 20px green";
        return true;
    }
}

function validatePhoneNumber() {
    if (phoneNumberField.value.length >= 11) {
        phoneNumberField.style.boxShadow = "1px 1px 20px green";
        return false;
    }
    else if(phoneNumberField.value.length == 0){
        phoneNumberField.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else {
        phoneNumberField.style.boxShadow = "1px 1px 20px red";
        return true;
    }
}

function validateLinkedIn() {
    if(inputLinkedinProfile.value.length == 0){
        inputLinkedinProfile.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else {
        inputLinkedinProfile.style.boxShadow = "1px 1px 20px green";
        return true;
    }
}
function validateAlumni() {
    if(inputAlumni.value == "Yes"){
        inputAlumni.style.boxShadow = "1px 1px 20px Green";
        return true;
    }
    else if(inputAlumni.value == "No"){
        inputAlumni.style.boxShadow = "1px 1px 20px Green";
        return true;
    }
    else {
        inputAlumni.style.boxShadow = "1px 1px 20px red";
        return false;
    }
}

function validatePosition(){
    if(inputPosition.value.length==0){
        inputPosition.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else{
        inputPosition.style.boxShadow = "1px 1px 20px green";
        return true;
    }
}
function validateCompanyName(){
    if(inputCompanyName.value.length==0){
        inputCompanyName.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else{
        inputCompanyName.style.boxShadow = "1px 1px 20px green";
        return true;
    }
}
function validateAddress(){
    if(inputAddress.value.length==0){
        inputAddress.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else{
        inputAddress.style.boxShadow = "1px 1px 20px green";
        return true;
    }
}
function validateWebsite(){
    if(inputWebsite.value.length==0){
        inputWebsite.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else{
        inputWebsite.style.boxShadow = "1px 1px 20px green";
        return true;
    }
}
function validateRemarks(){
    if(inputRemarks.value.length==0){
        inputRemarks.style.boxShadow = "1px 1px 20px red";
        return false;
    }
    else{
        inputRemarks.style.boxShadow = "1px 1px 20px green";
        return true;
    }
}

// function check(){
//     if(validateEmail()){
//         if(validatePass()){
//             return true;
//         }
//         return false;
//     }
//     return false;
// }