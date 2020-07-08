// variáveis para o banner rotativo automático

let time =4000, indexImage = 0,
    images = document.querySelectorAll(".slide img"),
    maxImages = images.length;

// variáveis de mudar o banner clicando

let pointer = document.querySelectorAll(".pointer .point"),
    position = 0;




    // rotaciona o banner

function rotationImage() {

    images[indexImage].classList.remove("selected");

    indexImage++;

    if(indexImage >= maxImages) {

        indexImage = 0;

    }

    images[indexImage].classList.add("selected");


}

// rotaciona a cada intervalo

function rotationStart() {

    setInterval(() => {

        rotationImage();


    }, time);


}

window.addEventListener("load", rotationStart);


function choicePoint() {

    pointer.forEach(point => {

        point.addEventListener("click", () => {

        

          
        });


    });


}
