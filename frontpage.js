const zoomElement = document.querySelector(".zoom");
let zoom = 0.5; // Initial zoom level set to zoomed out
const ZOOM_SPEED = 0.05;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;

// Apply the initial zoom level
zoomElement.style.transform = `scale(${zoom})`;
zoomElement.style.transformOrigin = "center 20%";



document.addEventListener("wheel", function(e) {  
    if(e.deltaY > 0 && zoom < MAX_ZOOM){    
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    } else if(e.deltaY < 0 && zoom > MIN_ZOOM){    
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  
    }

    zoomElement.style.transform = `scale(${zoom})`;
});

const pictureOverlay = document.querySelector(".pictureOverlay");
const aboutMePopup = document.getElementById("aboutMePopup");
const closePopupButton = document.getElementById("closePopup");

pictureOverlay.addEventListener("click", function() {
    aboutMePopup.style.display = "block";
});

closePopupButton.addEventListener("click", function() {
    aboutMePopup.style.display = "none";
});


const computerOverlay = document.querySelector(".computerOverlay");
const computerPopup = document.getElementById("computerPopup");
const closeComputerPopupButton = document.getElementById("closeComputerPopup");

computerOverlay.addEventListener("click", function() {
    computerPopup.style.display = "block";
});

closeComputerPopupButton.addEventListener("click", function() {
    computerPopup.style.display = "none";
});