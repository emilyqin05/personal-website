const zoomElement = document.querySelector(".zoom");
let zoom = 0.5; // Initial zoom level set to zoomed out
const ZOOM_SPEED = 0.05;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
let originalZoom = 1; // Store the original zoom level
let originalTransformOrigin = "center 20%"; // Store the original transform origin


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
const exitArrow = document.getElementById('exitArrow');

/*computerOverlay.addEventListener("click", function() {
    zoomElement.style.transform = `scale(2)`;
    screenContainer.style.display = "block";
});*/

computerOverlay.addEventListener("click", function() {
    // Store the original zoom level and transform origin
    originalZoom = zoom;
    originalTransformOrigin = zoomElement.style.transformOrigin;

    // Zoom into the computerOverlay
    zoomElement.style.transform = `scale(4.8)`;
    zoomElement.style.transformOrigin = "59% 19%"; // Adjust to zoom into the computer

    // Make miniScreen interactive and scrollable
    screenContainer.style.pointerEvents = "auto";
    miniScreen.style.overflowY = "scroll";

    // Show the exit arrow
    exitArrow.style.display = "block";
});

exitArrow.addEventListener("click", function() {
    // Reset zoom
    zoomElement.style.transform = `scale(${originalZoom})`;
    zoomElement.style.transformOrigin = originalTransformOrigin; // Reset the origin

    // Reset interactivity and scrollability
    screenContainer.style.pointerEvents = "none";
    miniScreen.style.overflowY = "hidden";

    // Hide the exit arrow
    exitArrow.style.display = "none";
});
