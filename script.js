let btns = document.querySelectorAll(".buttonn");
let innter = document.getElementById("inter");
let chance = 0,
  i = 0;
let check = [
  [btns[0], btns[1], btns[2]],
  [btns[3], btns[4], btns[5]],
  [btns[6], btns[7], btns[8]],
  [btns[0], btns[3], btns[6]],
  [btns[1], btns[4], btns[7]],
  [btns[2], btns[5], btns[8]],
  [btns[0], btns[4], btns[8]],
  [btns[2], btns[4], btns[6]],
];
const rearrange = () => {
  if (player[0] === "O") player = player.reverse();
};
let player = ["X", "O"];
let colour = ["aqua", "yellow"];
const clear = () => {
  btns.forEach((val) => (val.innerText = ""));
  btns.forEach((v) => (v.style.backgroundColor = "rgba(29, 92, 99, 0.5)"));
  innter.style.transition = "none";
  btns.forEach((val) => {
    val.style.transition = "none";
  });
  document.getElementById("win").style.display = "inline-block";
};
const reset = () => {
  i = 0;
  chance = 0;
};
document.getElementById("nextround").onclick = () => {
  clear();
  innter.style.visibility = "hidden";
};
const checkWinner = () => {
  for (const val of check) {
    if (
      val.every((value) => value.innerText === "X") ||
      val.every((value) => value.innerText === "O")
    ) {
      reset();
      document.getElementById("windraw").innerText = "YOU WON";
      innter.style.transition = "all 1s linear 2s";
      innter.style.visibility = "visible";
      document.getElementById("won").innerText = val[0].innerText;
      val.forEach((ele) => {
        ele.style.transition = "all 1s linear";
        ele.style.color = "black";
        ele.style.backgroundColor = "aqua";
      });
      document.getElementById(val[0].innerText).innerText++;
      if (val[0].innerText !== player[0]) player.reverse();
      document.getElementById("turn").innerText = val[0].innerText;
      return;
    }
  }
  if (chance === 9) {
    document.getElementById("win").style.display = "none";
    innter.style.transition = "all 1s linear 1s";
    innter.style.visibility = "visible";
    document.getElementById("windraw").innerText = "Match Draw";
    document.getElementById("ties").innerText++;
    reset();
    document.getElementById("turn").innerText = player[0];
  }
};
btns.forEach((element) => {
  element.onclick = () => {
    chance++;
    if (element.innerText === "") {
      element.innerText = player[i];
      i % 2 === 0 ? i++ : i--;
      element.style.color = element.innerText === "X" ? colour[0] : colour[1];
      document.getElementById("turn").innerText = player[i];
      if (chance >= 5) checkWinner();
    }
  };
});
const restartt = () => {
  document.querySelectorAll(".scroe").forEach((val) => {
    val.innerText = 0;
    innter.style.visibility = "hidden";
    clear();
  });
};
document.getElementById("quit").onclick = () => {
  restartt();
  rearrange();
  document.getElementById("turn").innerText = player[0];
};
document.getElementById("again").onclick = () => {
  clear();
  reset();
  document.getElementById("turn").innerText = player[0];
};
