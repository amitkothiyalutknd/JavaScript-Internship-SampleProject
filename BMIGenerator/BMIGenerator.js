let frm = document.querySelector("form");
frm.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  var inValid = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let results = document.querySelector("#results");
  let conclusion = document.querySelector("#conclusion");
  if (height === "" || height < 0 || isNaN(height) || height == inValid) {
    results.innerHTML = `Please! Insert A Valid Height Value.${height}`;
  } else if (
    weight === "" ||
    weight < 0 ||
    isNaN(weight) ||
    weight == inValid
  ) {
    results.innerHTML = `Please! Insert A Valid Weight Value.${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      conclusion.innerHTML = "You Are Under Weight.";
    } else if (18.6 <= bmi && bmi <= 24.9) {
      conclusion.innerHTML = "You Have Normal Weight.";
    } else {
      conclusion.innerHTML = "You Have Over Weight.";
    }
  }
});
