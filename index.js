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

function toggleEmailHintVisibility(emailInput) {
    const hint = document.getElementById("email-hint");
    const hasValue = emailInput.value.trim() !== "";
    const isInvalid = !emailInput.checkValidity();
    if (!hint) {
        return isInvalid;
    }
    hint.classList.toggle("is-visible", hasValue && isInvalid);
    return isInvalid;
}

function handleEmailInput(event) {
    toggleEmailHintVisibility(event.target);
}

function handleSubmit(event) {
    event.preventDefault();
    const emailInput = event.target.email;
    const isInvalid = toggleEmailHintVisibility(emailInput);
    if (isInvalid) {
        return;
    }
    showElemente("message");
    hideElement("sign");
}

function handleDismissMessage() {
    showElemente("sign");
    hideElement("message");
}



document.addEventListener("DOMContentLoaded", init)
