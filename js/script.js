window.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.querySelector("#password");
    const conPasswordField = document.querySelector("#con-password");
    const submitBtn = document.querySelector("button[type='submit']");

    submitBtn.addEventListener("click", (event) => {
        if (passwordField.value != conPasswordField.value) {
            alert("Passwords don't match");
        }
    })
})