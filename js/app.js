/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const btns = document.getElementById('btns')
console.log(btns)


/*----------------------------- Event Listeners -----------------------------*/
btns.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "#D9D065";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

/*-------------------------------- Functions --------------------------------*/