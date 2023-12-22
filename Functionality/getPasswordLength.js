const events = ["click", "touchend"];
const passLength = document.querySelector(".slider-form input");

events.forEach((e) =>
  passLength.addEventListener(e, () => {
    document.querySelector(".slider-form label span").textContent =
      passLength.value;
  })
);
