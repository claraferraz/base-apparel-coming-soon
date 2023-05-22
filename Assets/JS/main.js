const form = document.querySelector(".form");
const emailInput = document.querySelector(".email-input");
const sendBtn = document.querySelector(".send-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
});

const isValidEmail = (email) => {
  // the const re I just copied from the tutorial I used for this js
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function checkEmail(email) {
  email = emailInput.value.trim();
  const testEmail = isValidEmail(email);
  if (!email) return setError();
  if (!testEmail) return setError();
  if (testEmail) return setSuccess();
}
function setError() {
  const errorIcon = document.querySelector(".error-icon");
  const errorMsg = document.querySelector(".error-msg");
  errorIcon.classList.add("error");
  errorMsg.classList.add("error");
  emailInput.classList.add("error");
}

function setSuccess() {
  const errorIcon = document.querySelector(".error-icon");
  const errorMsg = document.querySelector(".error-msg");
  errorIcon.classList.remove("error");
  errorMsg.classList.remove("error");
  emailInput.classList.remove("error");
}
