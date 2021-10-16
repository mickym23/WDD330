import { showHikeList } from "./hikes.js";

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  showHikeList();
});