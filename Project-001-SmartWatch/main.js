const watchImage = document.querySelector(".watch");

const redButton = document.querySelector(".red");
const blackButton = document.querySelector(".black");
const blueButton = document.querySelector(".blue");
const pinkButton = document.querySelector(".pink");
const purpleButton = document.querySelector(".purple");

const timeButton = document.querySelector(".time");
const heartButton = document.querySelector(".heart");

const showTime = document.querySelector(".show-time");
const showHeart = document.querySelector(".show-heart");
const heartImage = document.querySelector(".heart-image");

redButton.addEventListener("click", () => {
  watchImage.src = "./images/red.png";
});
blackButton.addEventListener("click", () => {
  watchImage.src = "./images/black.png";
});
blueButton.addEventListener("click", () => {
  watchImage.src = "./images/blue.png";
});
pinkButton.addEventListener("click", () => {
  watchImage.src = "./images/pink.png";
});
purpleButton.addEventListener("click", () => {
  watchImage.src = "./images/purple.png";
});
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour -= 12;
  }
  let minute = date.getMinutes();
  let second = date.getSeconds();
  showTime.innerHTML = hour + " : " + minute + " : " + second;

  showHeart.innerHTML = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
}, 1000);

timeButton.addEventListener("click", () => {
  showTime.classList.remove("display-none");
  showHeart.classList.add("display-none");
  heartImage.classList.add("display-none");
});
heartButton.addEventListener("click", () => {
  showTime.classList.add("display-none");
  showHeart.classList.remove("display-none");
  heartImage.classList.remove("display-none");
});
