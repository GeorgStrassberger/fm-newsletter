function init() {
    const emailInput = document.getElementById("email");
    if (emailInput) {
        emailInput.addEventListener("input", handleEmailInput);
    }
}

function showElemente(eleID) {
    const ele = document.getElementById(eleID);
    ele.classList.remove("d-none");
    ele.setAttribute("aria-hidden", "false");

}

function hideElement(eleID) {
    const ele = document.getElementById(eleID);
    ele.classList.add("d-none");
    ele.setAttribute("aria-hidden", "true");
}

function handleEmailInput(event) {
    isValidEmailAddress(event.target);
    toggleEmailHintVisibility(event.target);
}

function isValidEmailAddress(input) {
    // const hasValue = input.value.trim() !== "";
    const isValid = input.checkValidity();
    return isValid;
}

function toggleEmailHintVisibility(emailInput) {
    const hint = document.getElementById("email-hint");
    const isValid = isValidEmailAddress(emailInput);

    hint.classList.toggle("is-visible", !isValid);
    hint.setAttribute("aria-hidden", String(isValid));
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

    emailInput.setAttribute("aria-invalid", String(!isValid));
    if (!isValid) {
        toggleEmailHintVisibility(emailInput);
        emailInput.focus();
        return;
    }

    renderMailAdresse(emailInput.value);
    showElemente("message");
    hideElement("sign");

    document.querySelector(".message-headline").focus();
}

function handleDismissMessage() {
    showElemente("sign");
    hideElement("message");

    document.getElementById("email").focus();
}

document.addEventListener("DOMContentLoaded", init)
