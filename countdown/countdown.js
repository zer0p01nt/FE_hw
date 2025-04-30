const state = document.getElementById("state");
const timer = document.getElementById("timer");

function toTime(time1, time2) {
  const timeDiff = time1.getTime() - time2.getTime();
  const hour = String(Math.floor(timeDiff / (1000 * 60 * 60))).padStart(2, "0");
  const min = String(
    Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const sec = String(Math.floor((timeDiff % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  return { hour, min, sec };
}

function clock() {
  const now = new Date();
  const open = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    7,
    0,
    0,
    0
  );
  const close = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    30,
    0,
    0
  );

  if (now > close) {
    state.textContent = "금일 마감";
    timer.textContent = "";
  } else if (now < open) {
    state.textContent = "금일 오픈까지 남은 시간";
    const toOpen = toTime(open, now);
    timer.textContent = `${toOpen.hour}:${toOpen.min}:${toOpen.sec}`;
  } else {
    state.textContent = "금일 마감까지 남은 시간";
    const toClose = toTime(close, now);
    timer.textContent = `${toClose.hour}:${toClose.min}:${toClose.sec}`;
  }
}

setInterval(clock, 1000);
clock();
