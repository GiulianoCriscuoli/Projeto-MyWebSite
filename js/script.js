let time =2000, indexImage = 0,
    images = document.querySelectorAll(".slide img"),
    maxImages = images.length;


function rotationImage() {

    images[indexImage].classList.remove("selected");

    indexImage++;

    if(indexImage >= maxImages) {

        indexImage = 0;

    }

    images[indexImage].classList.add("selected");


}


function rotationStart() {

    setInterval(() => {

        rotationImage();


    }, 2000);


}

window.addEventListener("load", rotationStart);