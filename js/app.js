/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const btns = document.getElementById('btns')
// console.log(btns)

const aboutSection = document.getElementById('aboutSection')
console.log(aboutSection)
/*----------------------------- Event Listeners -----------------------------*/
btns.addEventListener("mouseover", function(event) {
  // highlight the mouseOver target
  event.target.style.color = "#a4161a";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

aboutSection.addEventListener("mouseover", function(event) {
  //highlight the mouseOver target
  event.target.style.textDecoration = "underline";

  //reset underline after short delay
  setTimeout(function() {
    event.target.style.textDecoration = ""
  }, 1000);
}, false)
/*-------------------------------- Functions --------------------------------*/
function fadeInTitle() {
  const titleEl = document.querySelector(".title");
  titleEl.classList.add("fadeIn")
}