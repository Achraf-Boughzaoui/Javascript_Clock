setInterval(Clock_fun, 1000);

const hourhand = document.querySelector("[hour-hand]");
const minutehand = document.querySelector("[minute-hand]");
const secondhand = document.querySelector("[second-hand]");

function Clock_fun() {
  const thisdate = new Date();
  const seconds = thisdate.getSeconds() / 60;
  const minutes = (seconds + thisdate.getMinutes()) / 60;
  const hours = (minutes + thisdate.getHours()) / 12;
  rotation(secondhand, seconds);
  rotation(minutehand, minutes);
  rotation(hourhand, hours);
}

function rotation(element, rotationratio) {
  element.style.setProperty("--rotation", rotationratio * 360);
}

Clock_fun();
