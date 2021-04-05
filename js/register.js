var infoDiv = document.getElementById('register-validation-div')
var errorMessages = ''
var emailInput = document.getElementById('rinput-email')
var nameInput = document.getElementById('rinput-name')
var passwordInput = document.getElementById('rinput-password')
var confirmPasswordInput = document.getElementById('rinput-confirm-password')
var labelsQantity = document.getElementsByTagName('Label')
var formWillReset = document.getElementById('register-form')

function Validations() {

    // Validate the qantity of labels tags are in the document
    if (labelsQantity.length !== 4) {
        errorMessages = ("the qantity of label tags in the document is wrong")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate the  email input 
    if (emailInput.value === "" || emailInput.value === null) {
        errorMessages = ("Email field empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate the email input 
    if (nameInput.value === "" || nameInput.value === null) {
        errorMessages = ("Name field empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  password input contains text
    if (passwordInput.value === "" || passwordInput.value === null) {
        errorMessages = ("Password field empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the confirm-password input contains text
    if (confirmPasswordInput.value === "" || confirmPasswordInput.value === null) {
        errorMessages = ("Confirm password field  empty")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // Validate if the  confirm-password match with the password
    if (confirmPasswordInput.value !== passwordInput.value) {
        errorMessages = ("Make match the passwords")
        infoDiv.style.display = "block"
        infoDiv.style.color = "red"
        infoDiv.innerText = errorMessages
        return;
    }

    // All validations passed
    else {
        errorMessages = ("All DOM and users validations passed.")
        infoDiv.style.display = "block"
        infoDiv.style.color = "green"
        infoDiv.innerText = errorMessages
        return;
    }
}

function resetForm() {
    formWillReset.reset();
}






