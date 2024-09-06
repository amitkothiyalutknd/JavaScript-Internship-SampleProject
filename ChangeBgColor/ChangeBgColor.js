//Generate A Random Color
const bgColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let changing;
let startBGColor = function () {
  if (!changing) {
    changing = setInterval(function () {
      document.body.style.backgroundColor = bgColor();
    }, 1000);
  }
};
document.querySelector("#start").addEventListener("click", startBGColor);
let stopBGColor = function () {
  clearInterval(changing);
  changing = null;
};
document.querySelector("#stop").addEventListener("click", stopBGColor);
