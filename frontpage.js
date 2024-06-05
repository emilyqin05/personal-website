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

// Click event for resumeOverlay
const resumeOverlay = document.querySelector(".resumeOverlay");

resumeOverlay.addEventListener("click", function(event) {
    event.stopPropagation(); // Stop the click event from propagating

    // Replace "path_to_your_resume_pdf.pdf" with the actual path to your PDF file
    window.location.href = "Resume.pdf";
});