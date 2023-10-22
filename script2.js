let signCard = document.getElementsByClassName("btn2")[0];

let theWrapper = document.getElementsByClassName("signupWrapper")[0];
let theCard = document.getElementsByClassName("signupCard")[0];


signCard.addEventListener("click", () => {
  if (theWrapper) {
theWrapper.style.display="block"

    theWrapper.style.top = "0%";
    theWrapper.style.left = "0%";

    theWrapper.style.display = "flex" 
    theWrapper.style.justifyContent = "center" 

    // theWrapper.style.backgroundColor ="rgba(0,0,0,0.2)"
  } else {
    console.error("signupWrapper not found");
  }
});

window.addEventListener("click", (event) => {
  if (!theCard.contains(event.target) && !signCard.contains(event.target)) {
    theWrapper.style.display = "none";
  }
});


