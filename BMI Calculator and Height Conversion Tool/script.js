/* BMI Calculator */
const form1 = document.querySelector("#form1");
form1.addEventListener("submit", function (e) {
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results1 = document.querySelector("#results1");

  if (height === "" || height < 0 || isNaN(height)) {
    results1.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results1.innerHTML = "Please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    results1.innerHTML = `<span>${bmi}</span>`;
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
  }

  e.preventDefault();
});
/* Height Converter */
const form2 = document.querySelector("#form2");
form2.addEventListener("submit", function (e) {
  let feet = parseInt(document.querySelector("#feet").value);
  let inches = parseInt(document.querySelector("#inches").value);
  const results2 = document.querySelector("#results2");

  if (isNaN(feet) || isNaN(inches)) {
    results2.textContent = "Please enter a valid number!";
  } else if (feet < 0) {
    results2.textContent = "Please enter a feet value > 0";
  } else if (inches < 0 || inches >= 12) {
    results2.textContent = "Please enter an inch value between 0 and 12";
  } else {
    let cm = feet * 30.48 + inches * 2.54;
    results2.textContent = `${cm} cm`;
    document.querySelector("#feet").value = "";
    document.querySelector("#inches").value = "";
  }
  e.preventDefault();
});
