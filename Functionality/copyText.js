const passField = document.getElementById("textArea");
passField.addEventListener("mouseover", copyText);

function copyText() {
  navigator.clipboard.writeText(passField.value);
}
