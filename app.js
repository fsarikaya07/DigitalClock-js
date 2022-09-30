const hourse = document.getElementById("hourse");
const minutese = document.getElementById("minute");
const second = document.getElementById("second");

const newDateClock = () => {
  hourse.innerHTML = new Date().getHours();
  minutese.innerHTML = new Date().getMinutes();
  second.innerHTML = new Date().getSeconds();
  setTimeout(() => {
    newDateClock();
  }, 1000);
};

newDateClock();
