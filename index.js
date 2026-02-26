function init() {
    showElemente("sign");
    hideElement("message");
    const emailInput = document.getElementById("email");
    if (emailInput) {
        emailInput.addEventListener("input", handleEmailInput);
    }
}

function showElemente(eleID) {
    const ele = document.getElementById(eleID);
    ele.classList.remove("d-none");
}

function hideElement(eleID) {
    const ele = document.getElementById(eleID);
    ele.classList.add("d-none");
}

function handleEmailInput(event) {
    isValidEmailAddress(event.target);
    toggleEmailHintVisibility(event.target);
}

function isValidEmailAddress(input) {
    const hasValue = input.value.trim() !== "";
    const isInvalid = input.checkValidity();
    console.log("valid", hasValue && isInvalid);
    return hasValue && isInvalid;
}

function toggleEmailHintVisibility(emailInput) {
    const hint = document.getElementById("email-hint");
    hint.classList.toggle("is-visible", !isValidEmailAddress(emailInput));
}

function renderMailAdresse(email) {
    const emailAdresse = email || "ash@loremcompany.com";
    const emailElement = document.getElementById('email-address');
    emailElement.innerText = emailAdresse;
};

function handleSubmit(event) {
    event.preventDefault();
    const emailInput = event.target.email;
    const isValid = isValidEmailAddress(emailInput);

    if (!isValid) return;

    renderMailAdresse(emailInput.value);
    showElemente("message");
    hideElement("sign");
}

function handleDismissMessage() {
    showElemente("sign");
    hideElement("message");
}

document.addEventListener("DOMContentLoaded", init)
