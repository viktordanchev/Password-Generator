const passField = document.getElementById("textArea");
passField.addEventListener("click", copyText);

function copyText() {
  navigator.clipboard.writeText(passField.value);
  document.querySelector(".password-field span").textContent = "Copied";
}
