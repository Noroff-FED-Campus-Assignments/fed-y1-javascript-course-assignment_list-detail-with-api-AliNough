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
// const adrRegex = /^[a-zA-Z0-9 ]{3,}/;
const min3Char = /^[a-zA-Z0-9 ]{3,}/;

const msgRegex = /^[a-zA-Z0-9]{10,}/;

const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

formEle.addEventListener("submit", (event) => {
  console.log("hello");
  event.preventDefault();

  const name = nameEle.value;
  const email = emailEle.value;
  const adrs = adrEle.value;
  const mssg = msgEle.value;

  const nameValid = mrValidator(name);
  const emailValid = mrValidator(email);
  const adrValid = mrValidator(adrs);
  const mssgValid = mrValidator(mssg);

  if (!nameValid) {
    alert("Invalid name");
    return;
  } else if (!emailValid) {
    alert("Invalid email");
    return;
  } else if (!adrValid) {
    alert("Invalid");
    return;
  }

  //   submit form function call
});

const validateName = (event) => mrValidator(event.target, nameRegex);
// console.log("validateName>>>", validateName());
nameEle.addEventListener("input", validateName);
nameEle.addEventListener("blur", validateName);

const validateEmail = (event) => mrValidator(event.target, emailRegex);

emailEle.addEventListener("input", validateEmail);
emailEle.addEventListener("blur", validateEmail);

const validAdrs = (event) => mrValidator(event.target, min3Char);

adrEle.addEventListener("input", validAdrs);
adrEle.addEventListener("blur", validAdrs);

function mrValidator(field, regex, error) {
  const value = field.value.trim();
  const validationMessageEl = field.parentNode.querySelector("[data-id]");

  if (regex.test(value) && value !== "") {
    field.classList.add("is-valid");
    field.classList.remove("not-valid");

    // displayError(validationMessageEl);
    return true;
  } else {
    field.classList.add("not-valid");
    field.classList.remove("is-valid");

    // displayError(validationMessageEl, error || "Please enter a valid value");
    return false;
  }
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
