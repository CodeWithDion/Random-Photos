const imageContainerl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    addNewImages()
});

imageNum = 6;
function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 500)}`;
        imageContainerl.appendChild(newImgEl);
    }
}