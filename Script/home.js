const PersonName = document.getElementById("PersonName");
const PersonLastName = document.getElementById("PersonLastName");
const PersonGender = document.getElementById("PersonGender");
const PersonEmail = document.getElementById("PersonEmail");
const PersonPassword = document.getElementById("PersonPassword");
const Person = JSON.parse(localStorage.getItem("logInProfile"));

PersonName.innerText = Person.name;
PersonLastName.innerText = Person.lastName;
PersonGender.innerText = Person.gender;
PersonEmail.innerText =
  Person.email == null ? Person.phoneNumber : Person.email;
PersonPassword.innerText = Person.password;
