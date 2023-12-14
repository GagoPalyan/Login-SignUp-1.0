const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const male = document.getElementById("male");
const female = document.getElementById("female");
const password = document.getElementById("password");
const submitPassword = document.getElementById("submitPassword");
const accept = document.getElementById("accept");
const signUpBtn = document.getElementById("signUpBtn");

function newPerson(name, lastName, email, password, gender) {
  let obj = {};
  obj.name = name;
  obj.lastName = lastName;
  obj.email = emailRegex.test(email) ? email : null;
  obj.phoneNumber = phoneNumRegex.test(email) ? email : null;
  obj.password = password;
  obj.gender = gender;
  return obj;
}

let nameRegex = /^[A-Z][a-z]+$/;
let emailRegex = /^(?=.*[a-z])(?=.*[@])(?=.*[.]).{8,}$/;
let passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*+_.]).{8,}$/;
let phoneNumRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/;

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nameRegex.test(name.value)
    ? (name.style.border = "2px solid green")
    : (name.style.border = "2px solid red");
  nameRegex.test(lastName.value)
    ? (lastName.style.border = "2px solid green")
    : (lastName.style.border = "2px solid red");
  emailRegex.test(email.value) || phoneNumRegex.test(email.value)
    ? (email.style.border = "2px solid green")
    : (email.style.border = "2px solid red");
  passwordRegex.test(password.value)
    ? (password.style.border = "2px solid green")
    : (password.style.border = "2px solid red");
  password.value == submitPassword.value && submitPassword.value != ""
    ? (submitPassword.style.border = "2px solid green")
    : (submitPassword.style.border = "2px solid red");
  let gender;
  if (male.checked) {
    gender = "male";
  } else if (female.checked) {
    gender = "female";
  } else {
    gender = false;
  }
  if (
    passwordRegex.test(password.value) &&
    nameRegex.test(name.value) &&
    nameRegex.test(lastName.value) &&
    (emailRegex.test(email.value) || phoneNumRegex.test(email.value)) &&
    gender != false &&
    accept.checked
  ) {
    let profile = newPerson(
      name.value,
      lastName.value,
      email.value,
      password.value,
      gender
    );
    if (localStorage.getItem("personList") == null) {
      localStorage.setItem("personList", "[]");
    }
    let personList = JSON.parse(localStorage.getItem("personList"));
    personList.push(profile);
    localStorage.setItem("personList", JSON.stringify(personList));
    window.location.href = "./login.html";
  }
});
