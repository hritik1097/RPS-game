const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const yscore = document.querySelector(".yscore");
const yscores = document.querySelector(".yscores");
const cscore = document.querySelector(".cscore");
const cscores = document.querySelector(".cscores");
const char = ["Rock", "Paper", "Scissor"];

// function random(){
//     return char[Math.floor(Math.random()*char.length)]
// }
let count1 = 0;
let count2 = 0;

function handlerock() {
  let cold1 = char[Math.floor(Math.random() * char.length)];
  let hold1 = "Rock";
  if (hold1 && cold1 == "Paper") {
    yscore.textContent = hold1;
    cscore.textContent = cold1;
    alert("Computer Win");
    cscores.innerHTML = ++count2;
  }
  if (hold1 && cold1 == "Scissor") {
    yscore.textContent = hold1;
    cscore.textContent = cold1;
    alert("You Win");
    yscores.innerHTML = ++count1;
  }
  if (hold1 && cold1 === "Rock") {
    yscore.textContent = hold1;
    cscore.textContent = cold1;
    alert("Match Tie");
  }
}
function handlepaper() {
  let cold1 = char[Math.floor(Math.random() * char.length)];
  let hold1 = "Paper";

  if (hold1 && cold1 == "Paper") {
    yscore.textContent = hold1;
    cscore.textContent = cold1;
    alert("Match Tie");
  }
  if (hold1 && cold1 == "Scissor") {
    yscore.textContent = hold1;
    cscore.textContent = cold1;
    alert("Computer Win");
    cscores.innerHTML = ++count2;
  }
  if (hold1 && cold1 === "Rock") {
    yscore.textContent = hold1;
    cscore.textContent = cold1;
    alert("You Win");
    yscores.innerHTML = ++count1;
  }
}

function handlescissor() {
  let hold1 = "Scissor";
  let cold1 = char[Math.floor(Math.random() * char.length)];

  if (hold1 && cold1 === "Paper") {
    yscore.textContent = hold1;
    cscore.textContent = cold1;
    alert("You Win");
    yscores.innerHTML = count1++;
  }
  if (hold1 && cold1 === "Scissor") {
    yscore.textContent = hold1;
    cscore.textContent = cold1;
    alert("Match Tie");
  }
  if (hold1 && cold1 === "Rock") {
    yscore.textContent = hold1;
    cscore.textContent = cold1;
    alert("Computer Win");
    cscores.innerHTML = count2++;
  }
}
rock.addEventListener("click", () => {
  handlerock();
});

paper.addEventListener("click", () => {
  handlepaper();
});

scissor.addEventListener("click", () => {
  handlescissor();
});
