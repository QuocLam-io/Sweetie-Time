const countdown = () => {
  const wedding = new Date("August 26, 2022 24:00:00").getTime();
  let container = document.querySelector(".countdown");

  const now = new Date().getTime();

  const gap = wedding - now;

  if (gap === 0) {
    container.innerText = "NOW!";
    container.style.fontSize = "10rem";
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);

/* -------------------------------------------------------------------------- */

let array = [17, 11, 60, 25, 150, 225, 31, 120];

function maxProfitDays(arraygiven) {
  let maxProfit = 0;
  let timearray = [];
  for (i = 0; i < arraygiven.length; i++) {
    for (j = i + 1; j <= arraygiven.length; j++) {
      let currDiff = arraygiven[j] - arraygiven[i];
      if (currDiff > maxProfit) {
        maxProfit = currDiff;
        timearray = [i, j];
      }
    }
  }
  console.log(maxProfit);
  console.log(timearray);
}
maxProfitDays(array);
