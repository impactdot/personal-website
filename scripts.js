function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Toggle background image
    var bgImageElement = document.querySelector(".bg-image");
    var currentImage = bgImageElement.getAttribute("src");
    var newImage = currentImage.includes("light.png")
        ? "darker.png"
        : "light.png";
    bgImageElement.setAttribute("src", newImage);

    // Toggle noise background
    var noiseBgElement = document.querySelector(".noise-bg");
    noiseBgElement.classList.toggle("noise-bg");
}

document.addEventListener("DOMContentLoaded", function () {
    const expandingTitle = document.querySelector(".expanding-title");
    const expandingContent = document.querySelector(".expanding-content");

    expandingTitle.addEventListener("click", function () {
        expandingContent.classList.toggle("expanded");
    });
});
