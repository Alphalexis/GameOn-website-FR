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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/* You display as "none" for the parent of parent of the close button,
which is "bground" */
const close = document.querySelector("span.close");
	close.addEventListener("click", function() {
    this.parentElement.parentElement.style.display = 'none';
	});


  const empty = document.getElementById("first");
  empty.setAttribute("required", "required");


  const empty2 = document.getElementById("last");
  empty2.setAttribute("required", "required");


  const min = document.getElementById("last");
  empty2.setAttribute("minlength", "2");

  function checked() {
    var check = document.querySelector("label.checkbox2-label").required;
}
