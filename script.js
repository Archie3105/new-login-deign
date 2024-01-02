// var logIn = document.getElementsByClassName("login");
// var signUp = document.getElementsByClassName("signup");

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const togglePassword = document.getElementById('togglePassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.innerHTML = '🙈 Hide';
    } else {
        passwordInput.type = 'password';
        togglePassword.innerHTML = '👀 Show';
    }
}

// function signUpPage() {
//     // logIn.style.display = "none";
//     signUp.style.display = "block";
//     signUp.innerHTML= "Sign in"
//     console.log("signup")
// }
// function signInPage() {
//     // logIn.style.display = "block";
//     // signUp.style.display = "none";
//     console.log("signin")
// }