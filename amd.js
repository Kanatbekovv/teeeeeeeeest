const circles = document.querySelectorAll(".circle ");
console.log(circles);
let activeLight = 0;
setInterval(() => {
  Slight();
}, 1500);

function Slight() {
  circles[activeLight].className = "circle ";
  activeLight++;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currenLight = circles[activeLight];
  currenLight.classList.add(currenLight.getAttribute("color"));
}
