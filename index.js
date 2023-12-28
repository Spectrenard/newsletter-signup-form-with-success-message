const main = document.getElementById("main-page");
const btn = document.querySelector("input[type=submit]");
const success = document.getElementById("card");
const err = document.getElementById("err");
const dissmissButton = document.getElementById("dismiss");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let email; // Déclare la variable à un niveau supérieur

function validation() {
  email = document.getElementById("email").value; // Affecte la valeur à la variable email
  const text = document.getElementById("text");
  const input = document.querySelector("input[type=text]");

  if (email.match(pattern)) {
    text.innerHTML = "Votre e-mail est valide";
    text.style.color = "#00ff00";
    input.classList.remove("value-false");
    input.classList.add("value-true");
  } else {
    text.innerHTML = "Votre e-mail est invalide";
    text.style.color = "#ff0000";
    input.classList.add("value-false");
    input.classList.remove("value-true");
  }
}

btn.addEventListener("click", () => {
  if (!email.match(pattern)) {
    err.innerHTML = "Please, enter a valid email.";
  } else {
    err.innerHTML.remove;
    success.style.display = "block";
    main.style.display = "none";
  }
});

dissmissButton.addEventListener("click", () => {
  success.style.display = "none";
  main.style.display = "block";
  document.getElementById("email").value = "";
});
