const imgs = document.getElementById("imgs");
const shower = document.getElementById("shower");
const ShowerImg = document.getElementById("shower-img");

const none = () => {
  shower.style.display = "none";
  ShowerImg.style.display = "none";
};

imgs.onclick = (e) => {
  console.log(e.target.src);
  shower.style.display = "block";
  ShowerImg.style.display = "block";
  ShowerImg.src = e.target.src;
};

shower.onclick = () => {
  none();
};
ShowerImg.onclick = () => {
  none();
};

const a = document.createElement("div");

a.style.display = "block";
