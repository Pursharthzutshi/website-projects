const passwordIcon = document.querySelector(".password-icon");

passwordIcon.addEventListener("click", togglePasswordType)

function togglePasswordType() {
    const password = document.querySelector(".password");
    const ReCheckPassword = document.querySelector(".Re-Check-Password");

    if (password.type === "password" && ReCheckPassword.type === "password") {
        password.type = "text";
        ReCheckPassword.type = "text";
        passwordIcon.name = "eye-off-outline";
    } else {
        password.type = "password";
        ReCheckPassword.type = "password";
        passwordIcon.name = "eye-outline";
    }
}