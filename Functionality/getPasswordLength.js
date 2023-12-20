const passLength = document.querySelector(".slider-form input");

passLength.addEventListener("click", () => {
  document.querySelector(".slider-form label span").textContent =
    passLength.value;
});
