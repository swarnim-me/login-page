window.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.querySelector("#password");
    const conPasswordField = document.querySelector("#con-password");
    const submitBtn = document.querySelector("button[type='submit']");
    const toast = document.querySelector(".toast-message");
    submitBtn.addEventListener("click", (event) => {
        if (passwordField.value != conPasswordField.value) {
            event.preventDefault();
            toast.classList.remove("hide");
            setTimeout(() => {
                toast.classList.add("hide");
            }, 2000);
        }
    })
})