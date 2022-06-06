/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const btns = document.getElementById('btns')
// console.log(btns)

/*----------------------------- Event Listeners -----------------------------*/
btns.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "#a4161a";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


/*-------------------------------- Functions --------------------------------*/
function fadeInTitle() {
  const titleEl = document.querySelector(".title");
  titleEl.classList.add("fadeIn")
}