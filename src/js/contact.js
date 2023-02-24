/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L50
============================================
*/

// TODO: Get DOM elements from the DOM
const formEle = document.querySelector("#js-form");
const nameEle = document.querySelector("#js-name-form");
const emailEle = document.querySelector("#js-email-form");
const adrEle = document.querySelector("#js-address-form");
const msgEle = document.querySelector("#js-address-form");
const submitEle = document.querySelector("#js-address-form");
const msgTagHolder = document.querySelector("#js-msg-holder");

const nameRegex = /^[a-zA-Z ]{3,}/;
const min3Char = /^[a-zA-Z0-9 ]{3,}/;

const msgRegex = /^[a-zA-Z0-9]{10,}/;

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

formEle.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();

  const name = nameEle.value;
  const email = emailEle.value;
  const adrs = adrEle.value;
  const mssg = msgEle.value;

  const nameValid = mrValidator(name, nameRegex);
  const emailValid = mrValidator(email, emailRegex);
  const adrValid = mrValidator(adrs, min3Char);
  const mssgValid = mrValidator(mssg, msgRegex);

  msgTagHolder.innerHTML = "";

  if (!nameValid) {
    alert("Invalid name");
    return;
  } else if (!emailValid) {
    alert("Invalid email");
    return;
  } else if (!adrValid) {
    alert("Invalid address");
    return;
  } else if (!mssgValid) {
    alert("please write a message");
  } else {
    alert("Success");
  }

  //   submit form function call
});

const validateName = () => mrValidator(event.target, nameRegex);

nameEle.addEventListener("input", validateName);
nameEle.addEventListener("blur", validateName);

const validateEmail = () => mrValidator(event.target, emailRegex);

emailEle.addEventListener("input", validateEmail);
emailEle.addEventListener("blur", validateEmail);

const validAdrs = () => mrValidator(event.target, min3Char);

adrEle.addEventListener("input", validAdrs);
adrEle.addEventListener("blur", validAdrs);

function mrValidator(field, regex, error) {
  const value = field.value.trim();
  const validationMsgEl = field.parentNode.querySelector("[data-id]");

  if (regex.test(value) && value !== "") {
    field.classList.add("is-valid");
    field.classList.remove("not-valid");

    // displayError(validationMsgEl);
    dispValidationMsg(validationMsgEl, "success");
    return true;
  } else {
    field.classList.add("not-valid");
    field.classList.remove("is-valid");

    dispValidationMsg(validationMsgEl, error || "Please enter a valid value");
    return false;
  }
}

function dispValidationMsg(validationMsgEl, msg = "invalid") {
  validationMsgEl.innerHTML = "this is a text";
}

// TODO: Create event listeners for the form

/*
============================================
API calls
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L157
============================================
*/

// TODO: Set up a function to fetch data from the API

/*
============================================
Helper functions
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L118
============================================
*/

// TODO: Create a function to validate an input field

// TODO: Create a function to create a DOM element
