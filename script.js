const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

function validateField(field) {
  if (!field.checkValidity()) {
    const errorMessage = field.validationMessage;
    alert(errorMessage);
    return false;
  }
  return true;
}

function valpass(Password) {
  if (password.value.length < 8) {
    alert("Пароль должен содержать не менее 8 символов.");
    return false;
  }
  return true;
}

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  const Name = document.getElementById("Name");
  const password = document.getElementById("Password");
  
  if (validateField(Name) && validateField(password)) {
    console.log("Form submitted successfully");
  } else {
    alert("Пожалуйста, заполните все поля и убедитесь, что они валидны.");
  }
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  
  const Name = document.getElementById("Name");
  const password = document.getElementById("Password");
  
  if (validateField(Name) && validateField(password)) {
    console.log("Form submitted successfully");
  } else {
    alert("Пожалуйста, заполните все поля и убедитесь, что они валидны.");
  }
});