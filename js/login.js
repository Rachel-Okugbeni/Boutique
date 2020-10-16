const login = document.getElementById('login');
const register = document.getElementById('register');
// TOGGLE LOGIN / REGISTER FORMS
document.getElementById('open-reg').addEventListener("click", function() {
   login.style.display = "none"
   register.style.display = "block"
});
document.getElementById('open-log').addEventListener("click", function() {
    login.style.display = "block"
    register.style.display = "none"
});
