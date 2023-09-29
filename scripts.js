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
    const darkLightBtn = document.querySelector('span[onclick="toggle()"]');
    if (document.body.classList.contains("dark-mode")) {
        darkLightBtn.classList.add("dark-mode-button");
    } else {
        darkLightBtn.classList.remove("dark-mode-button");
    }
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

document.addEventListener("DOMContentLoaded", event => {
    let titles = document.querySelectorAll(".expanding-title");
    titles.forEach(title => {
        title.addEventListener("click", function () {
            let content = this.nextElementSibling;
            let currentStyle = window.getComputedStyle(content).display;

            // If the content is currently displayed...
            if (currentStyle === "block") {
                // ...hide it.
                content.style.display = "none";
            } else {
                // Otherwise, display it.
                content.style.display = "block";
            }
        });
    });
});
