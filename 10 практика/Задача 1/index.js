document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail"); 
    const fullsizeImage = document.getElementById("fullsize-image"); 
  
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        const imageSrc = thumbnail.getAttribute("src"); 
        fullsizeImage.setAttribute("src", imageSrc); 
      });
    });
  });
  