const logEmail = document.getElementById("logEmail");
const logPassword = document.getElementById("logPassword");
const loginBtn = document.getElementById("loginBtn");

let emailRegex = /^(?=.*[a-z])(?=.*[@])(?=.*[.]).{8,}$/;
let passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*+_.]).{8,}$/;
let phoneNumRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/;

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emailRegex.test(logEmail.value) || phoneNumRegex.test(logEmail.value)
    ? (logEmail.style.border = "2px solid green")
    : (logEmail.style.border = "2px solid red");
  passwordRegex.test(logPassword.value)
    ? (logPassword.style.border = "2px solid green")
    : (logPassword.style.border = "2px solid red");
  if (
    (emailRegex.test(logEmail.value) || phoneNumRegex.test(logEmail.value)) &&
    passwordRegex.test(logPassword.value)
  ) {
    let personList = JSON.parse(localStorage.getItem("personList"));
    personList.forEach((item) => {
      if (
        (item.email == logEmail.value || item.phoneNumber == logEmail.value) &&
        item.password == logPassword.value
      ) {
        let logInProfile = JSON.stringify(item);
        localStorage.setItem("logInProfile", logInProfile);
        window.location.href = "./homePage.html";
      }
    });
  }
});
