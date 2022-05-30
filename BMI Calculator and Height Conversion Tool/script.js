/* BMI Calculator */
const form1 = document.querySelector("#form1");
form1.addEventListener("submit", function (e) {
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results1 = document.querySelector("#results1");

  if (height === "" || height < 0 || isNaN(height)) {
    results1.innerHTML = "Please provide a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results1.innerHTML = "Please provide a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results1.innerHTML = `<span>${bmi}</span>`;
  }

  e.preventDefault();
});

