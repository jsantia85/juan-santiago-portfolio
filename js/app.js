/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const btns = document.getElementById('btns')
// console.log(btns)

const juanSantiago = document.getElementById('juanSantiagoJpg')
// console.log(juanSantiago)

import {projects} from "../js/projects.js"

const cardContainer = document.getElementById("card-container")

// console.log(cardContainer)
/*----------------------------- Event Listeners -----------------------------*/
btns.addEventListener("mouseover", function(event) {
  // highlight the mouseover target
  event.target.style.color = "#a4161a";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

juanSantiago.addEventListener("mouseover", function(event) {
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

let projectMarkup = projects.map(project => 
  `
    <div class="card text-center" style="width: 18rem;">
    <img src="${project.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">${project.description}</p>
      <div>
        <a href="${project.gitHub}" class="btn btn-primary">GitHub</a>
        <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
      </div>
    </div>
    </div>
  `
  ).join('')
  
  cardContainer.innerHTML = projectMarkup
  
  // console.log(projectMarkup)