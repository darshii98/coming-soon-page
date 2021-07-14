"use-strict";

const form = document.querySelector("#form");
const mail = document.querySelector("#mail");
const successMsg = document.querySelector(".success-msg");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = mail.value;
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //checking valid email
  if (value.match(regex)) {
    if (!errorMsg.classList.contains("hidden")) {
      errorMsg.classList.add("hidden");
    }

    if (!errorIcon.classList.contains("hidden")) {
      errorIcon.classList.add("hidden");
    }
    successMsg.classList.remove("hidden");

    //Timeout function to remove message
    setTimeout(() => {
      successMsg.classList.add("hidden");
    }, 2000);

    //Reset form after successful submission
    form.reset();
  } else {
    errorMsg.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
  }
});
