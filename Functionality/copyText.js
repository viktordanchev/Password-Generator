const inputContainer = document.getElementById("inputContainer");
inputContainer.addEventListener("click", copyText);

function copyText() {
  const passField = document.querySelector(".password-field div input");

  navigator.clipboard.writeText(passField.value);
  document.querySelector(".password-field span").textContent = "Copied";
}
