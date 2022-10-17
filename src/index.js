import { App } from "./App.js";
import "./index.css";

let num = 0;
const root = document.getElementById("root");
root.innerHTML = App;
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const count = document.getElementById("count");
count.innerHTML = num;

decrement.addEventListener("click", () => {
  num = num - 1;
  count.innerHTML = num;
});

increment.addEventListener("click", () => {
  num = num + 1;
  count.innerHTML = num;
});
