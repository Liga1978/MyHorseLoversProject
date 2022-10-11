const submit = document.getElementById("submitRegistration");
const email2Field = document.getElementById("inputEmail2");
const inputPassword2Field = document.getElementById("inputPassword2");
const inputAddress = document.getElementById("inputAddress");
const checkTick = document.getElementById("checked")

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
    
  let valid = true;

  if (!email2Field.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    email2Field.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  } else if (!inputPassword2Field.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    inputPassword2Field.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  } else if (!inputAddress.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    inputAddress.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  } else if (checkTick!=1) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    checkTick.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
    return true;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var collapsiblelogin = this.nextElementSibling;
    if (collapsiblelogin.style.display === "block") {
      collapsiblelogin.style.display = "none";
    } else {
      collapsiblelogin.style.display = "block";
    }
  });
}

document.getElementById('date').innerHTML = new Date().toDateString();