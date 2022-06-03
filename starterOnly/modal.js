function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector("span.close");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");
const confirmModal = document.querySelector(".confirm-modal");
const confirmModalClose = document.querySelector(".confirm-modal-close");
const confirmModalMsg = document.querySelector(".confirm-modal-message");
const confirmModalBtn = document.querySelector(".confirm-modal-btn");

/* error messages that are going to be displayed for the users */

const errorMessages = {
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


/* You display as "none" for the parent of parent of the close button,
which is "bground" */

close.addEventListener("click", function() {
  this.parentElement.parentElement.style.display = 'none';
});



  /* We first create an invalid alert*/
  function isInvalid(element, message) {
    let target;
    if (NodeList.prototype.isPrototypeOf(element)) target = element[0].parentNode;
    else target = element.parentNode;
    target.setAttribute("data-error-visible", true);
    target.setAttribute("data-error", message);
  }
  
  /* this code shows the validation screen when the form is properly filled*/
  function isValid() {
    modalbg.style.display = "none";
    confirmModal.style.display = "flex";
    confirmModalBtn.addEventListener("click", () => {
      confirmModal.style.display = "none";
    });
    confirmModalClose.addEventListener("click", () => {
      confirmModal.style.display = "none";
    });
  }
  



/* We want to remove the default html error alerts */
function removeAlerts() {
	let invalidFields = document.querySelectorAll(
		'.formData[data-error-visible="true"]'
	);
	for (let field of invalidFields) {
		field.setAttribute("data-error-visible", false);
		field.setAttribute("data-error", "");
	}
}


/* this checks if the first name isn't empty and is more than 2 characters */

function firstValidation() {
	let inputValue = firstNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}

/* this checks if the last name isn't empty and is more than 2 characters */
function lastValidation() {
	let inputValue = lastNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}

/* this code checks if the email used is valid and was formated correctly (the appropriate characters)*/
function emailValidation() {
	let regex = /^\S+@\S+\.\S+$/;
	return regex.test(emailInput.value);
}

/*this code is there to check if the birthdate given and is older than the current day */
function birthdateValidation() {
	let birthdate = new Date(birthdateInput.value);
	let today = new Date();
	if (birthdate.toString() !== "Invalid Date") {
		if (
			birthdate.getDate() >= today.getDate() &&
			birthdate.getMonth() == today.getMonth() &&
			birthdate.getFullYear() == today.getFullYear()
		) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

/*the code chacks if the quantity given is a number */
function quantityValidation() {
	let regex = /^[0-9]+$/;
	return regex.test(quantityInput.value);
}

/* this code is so a location is selected */
function locationValidation() {
	for (let radio of locationInput) {
		if (radio.checked === true) return true;
	}
	return false;
}

/* this checks if the general condition checkbox has been properly checked */
function checkboxValidation() {
	return checkboxInput.checked;
}

/* this code is there to test the form and to send or not the error messages written up-top this code */

function validate(event) {
	event.preventDefault();
	let isValidInput = true;
	removeAlerts();
	if (!firstValidation()) {
		isValidInput = false;
		isInvalid(firstNameInput, errorMessages.firstName);
	}
	if (!lastValidation()) {
		isValidInput = false;
		isInvalid(lastNameInput, errorMessages.lastName);
	}
	if (!emailValidation()) {
		isValidInput = false;
		isInvalid(emailInput, errorMessages.email);
	}
	if (!birthdateValidation()) {
		isValidInput = false;
		isInvalid(birthdateInput, errorMessages.birthdate);
	}
	if (!quantityValidation()) {
		isValidInput = false;
		isInvalid(quantityInput, errorMessages.quantity);
	}
	if (!locationValidation()) {
		isValidInput = false;
		isInvalid(locationInput, errorMessages.location);
	}
	if (!checkboxValidation()) {
		isValidInput = false;
		isInvalid(checkboxInput, errorMessages.checkbox);
	}
	if (isValidInput) {
		isValid();
	}
}

  


  

