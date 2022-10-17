import { App } from "./App.js";
import "./index.css";
import counterLogo from "./counter.svg";

const root = document.getElementById("root");
root.innerHTML = App;
const logo = document.querySelector(".logo");
logo.src = counterLogo;
