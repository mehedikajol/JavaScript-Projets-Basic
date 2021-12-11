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

//DISPLAYING DIFFERENT WATCH FACES ON COLOR BUTTON CLICK
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

//ADDING ZERO BRFORE ONE DIGIT NUMBERS (0-9)
let addZero = function (number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number;
};

//UPDATING THE TIME EVERY SECOND
setInterval(() => {
  let date = new Date();
  let amPm = "";
  let hour = date.getHours();
  if (hour < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour -= 12;
  }
  let minute = date.getMinutes();
  let second = date.getSeconds();
  showTime.innerHTML =
    addZero(hour) +
    " : " +
    addZero(minute) +
    " : " +
    addZero(second) +
    "<br/>" +
    amPm;
}, 1000);

//UPDATING THE HEART COUNT EVERY FIVE SECONDS
setInterval(() => {
  showHeart.innerHTML =
    Math.floor(Math.random() * (100 - 60 + 1)) + 60 + " BPM";
}, 5000);

//ADDING ONCLICK FUNCTIONALITIES ON TIME AND HEART RATE BUTTON
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
