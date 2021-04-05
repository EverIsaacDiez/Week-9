var issuesDiv = document.getElementById('login-validation-div')
var errorMessages = ''
var emailInput = document.getElementById('input-email')
var passwordInput = document.getElementById('input-password')
var labelsQantity = document.getElementsByTagName('Label')
var formWillReset = document.getElementById('login-form')

function Validations() {

    //Validate the  email input  
    if (emailInput.value === "" || emailInput.value === null) {
        errorMessages = ("Email field empty")
        issuesDiv.style.display = "block"
        issuesDiv.style.color = "red"
        issuesDiv.innerText = errorMessages
        return;
    }

    //Validate the password input
    if (passwordInput.value === "" || passwordInput.value === null) {
        errorMessages = ("Password field empty")
        issuesDiv.style.display = "block"
        issuesDiv.style.color = "red"
        issuesDiv.innerText = errorMessages
        return;
    }

    //Quantity of labels tags are in the document
    if (labelsQantity.length !== 2) {
        errorMessages = ("There aren't label tags in the document")
        issuesDiv.style.display = "block"
        issuesDiv.style.color = "red"
        issuesDiv.innerText = errorMessages
        return;
    }

    //All validations passed
    else {
        errorMessages = ("Validations passed")
        issuesDiv.style.display = "block"
        issuesDiv.style.color = "green"
        issuesDiv.innerText = errorMessages
        return;
    }
}

//Reset form
function cleanForm() {
    formWillReset.reset();
}





