const zoomElement = document.querySelector(".zoom");
let zoom = 0.2; // Initial zoom level set to zoomed out
const ZOOM_SPEED = 0.02;
const MIN_ZOOM = 0.2;
const MAX_ZOOM = 1;

// Apply the initial zoom level
zoomElement.style.transform = `scale(${zoom})`;

document.addEventListener("wheel", function(e) {  
    if(e.deltaY > 0 && zoom < MAX_ZOOM){    
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    } else if(e.deltaY < 0 && zoom > MIN_ZOOM){    
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  
    }
});