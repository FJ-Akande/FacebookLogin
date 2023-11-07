const input = document.querySelectorAll("input");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

//Pattern validation
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phonePattern = /^[0-9]{11}$/;

const formValidation = () => {
  if (email.value.match(emailPattern) || email.value.match(phonePattern)) {
    if (password.value.length >= 6) {
      alert("Login successful!");
      email.value = "";
      password.value = "";
    } else {
      alert("Password must be at least 6 characters long");
    }
  } else {
    alert("Invalid email/phone number format");
  }
};

const submitValidation = () => {
  submit.addEventListener("click", formValidation);
};
submitValidation();
