const slideListElem = document.getElementById("slide-list");
slideListElem.style.transform = `translateX(-1000px)`;

let idx = 1;
let isLoading = false;

const move = () => {
  isLoading = true;

  slideListElem.classList.add("on");
  slideListElem.style.transform = `translateX(-${idx}000px)`;

  setTimeout(() => {
    isLoading = false;
    slideListElem.classList.remove("on");
    if (idx == 5) {
      idx = 1;
    } else if (idx == 0) {
      idx = 4;
    }
    slideListElem.style.transform = `translateX(-${idx}000px)`;
  }, 1000);
};

const createInterval = () => {
  return setInterval(() => {
    idx++;

    move();
  }, 2000);
};

let interval = createInterval();

const playBtnsElem = document.getElementById("play-btns");

document.getElementById("pause").onclick = () => {
  playBtnsElem.classList.remove("on");
  clearInterval(interval);
};
document.getElementById("play").onclick = () => {
  playBtnsElem.classList.add("on");
  interval = createInterval();
};

document.getElementById("prev-btn").onclick = () => {
  if (isLoading) return;
  idx--;
  move();
  playBtnsElem.classList.remove("on");
  clearInterval(interval);
};

document.getElementById("next-btn").onclick = () => {
  if (isLoading) return;
  idx++;
  move();
  playBtnsElem.classList.remove("on");
  clearInterval(interval);
};
