const emailForm = document.getElementById("emailForm");
const emailError = document.getElementById("emailError");
const nameError = document.getElementById("nameError");
const passError = document.getElementById("passError");
const repatePassword = document.getElementById("repatePassword");
const svgEye = document.getElementById("svgEye");

const emailPatterns = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameValidation = /^([a-zA-Z ]){2,30}$/;
const pasValidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

emailForm.addEventListener("submit", (e) => {
    let valueEmail = document.getElementById("email").value;
    let  valueName = document.getElementById("name").value;
    let passWord = document.getElementById("password").value
    let repatePassword = document.getElementById("password").value
    let formValidation = true;
    
    if (!emailPatterns.test(valueEmail)) {
        emailError.textContent = "Invalid email";
        formValidation = false;
    } else {
        emailError.textContent = "";
    }
    
    if(!nameValidation.test(valueName)) {
        nameError.textContent = "name is not corect";
        formValidation = false;
    } else {
        nameError.textContent = "";
    }

    if (!pasValidation.test(passWord)) {
        passError.textContent = "Password must include a number and special character"
        formValidation = false;
    }else if (repatePassword !== passWord){
        passError.textContent = "pass doesn match"
        formValidation = false;
    }else {
        passError.textContent = "";
    }

    if (!formValidation) {
        e.preventDefault();
    }
});

function showPassword() {
    const passwordInput = document.getElementById("password");
    const repatePasswordInput = document.getElementById("repatePassword");
    if (passwordInput.type === "password" && repatePasswordInput.type === "password") {
        passwordInput.type = "text";
        repatePasswordInput.type = "text"
    } else {
        passwordInput.type = "password";
        repatePasswordInput.type = "password"
    }
}