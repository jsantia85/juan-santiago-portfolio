/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const btns = document.getElementById('btns')
// console.log(btns)

const aboutSection = document.getElementById('juanSantiagoJpg')
console.log(aboutSection)
/*----------------------------- Event Listeners -----------------------------*/
btns.addEventListener("mouseover", function(event) {
  // highlight the mouseover target
  event.target.style.color = "#a4161a";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

aboutSection.addEventListener("mouseover", function(event) {
  event.target.style.boxShadow = "10px 5px 5px #a4161a";

  setTimeout(function() {
    event.target.style.boxShadow = ""
  }, 500);
}, false)
/*-------------------------------- Functions --------------------------------*/
function fadeInTitle() {
  const titleEl = document.querySelector(".title");
  titleEl.classList.add("fadeIn")
}

