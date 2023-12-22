const passField = document.getElementById("textArea");
passField.addEventListener("click", copyText);

function copyText() {
  const copyTextElement = document.querySelector(".password-field span");

  copyTextElement.textContent = "Copied";
  navigator.clipboard.writeText(passField.value);

  setTimeout(function () {
    copyTextElement.style.visibility = "hidden";
  }, 2000);

  copyTextElement.style.visibility = "visible";
}
