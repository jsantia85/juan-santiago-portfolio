/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
//create cached el ref for about button
const aboutBtn = document.querySelector("#aboutBtn")
// console.log(aboutBtn)


/*----------------------------- Event Listeners -----------------------------*/
//create event listener for about btn
aboutBtn.addEventListener('click', handleClick)


/*-------------------------------- Functions --------------------------------*/

function handleClick () {
  console.log('About button has been clicked!')
}