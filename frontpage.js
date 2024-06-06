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
const screenContainer = document.querySelector(".screenContainer");
const miniScreen = document.querySelector(".miniScreen");

/*computerOverlay.addEventListener("click", function() {
    zoomElement.style.transform = `scale(2)`;
    screenContainer.style.display = "block";
});*/

computerOverlay.addEventListener("click", function() {
    // Zoom into the computerOverlay
    zoomElement.style.transform = `scale(2)`;
    zoomElement.style.transformOrigin = "49% 15%"; // Adjust to zoom into the computer

    // Make miniScreen interactive and scrollable
    screenContainer.style.pointerEvents = "auto";
    miniScreen.style.overflowY = "scroll";
});