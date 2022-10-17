import { App } from "./App.js";
import "./index.css";
import counterLogo from "./counter.svg";

let num = 0;
const root = document.getElementById("root");
root.innerHTML = App;
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const logo = document.querySelector(".logo");
const count = document.getElementById("count");
count.innerHTML = num;
logo.src = counterLogo;

decrement.addEventListener("click", () => {
  num = num - 1;
  count.innerHTML = num;
});

increment.addEventListener("click", () => {
  num = num + 1;
  count.innerHTML = num;
});
