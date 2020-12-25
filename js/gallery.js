function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs div img");
    let mainImage = document.querySelector("#gallery-photo img");
  
    thumbnails.forEach((thumbnail) => {
      // Preload large images.
      let newImageSrc = thumbnail.dataset.largeVersion;
      let largeVersion = new Image();
      largeVersion.src = newImageSrc;
  
      thumbnail.addEventListener("click", function() {
        // Set clicked image as main image.
        mainImage.setAttribute("src", newImageSrc);
        // Set new image alt
        let newImageAlt = thumbnail.alt;
        mainImage.setAttribute("alt", newImageAlt);
  
        // Change which image is current.
        let currentClass = "current";
        document.querySelector(".current").classList.remove(currentClass);
        thumbnail.parentNode.classList.add(currentClass);
  
        // Update image info.
        let galleryInfo = document.querySelector("#gallery-info");
        let title = galleryInfo.querySelector(".title");
        let description = galleryInfo.querySelector(".description");
        title.innerHTML = thumbnail.dataset.title;
        description.innerHTML = thumbnail.dataset.description;
      });
    });
  }
  