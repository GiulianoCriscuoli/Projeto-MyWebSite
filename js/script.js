// variáveis para o banner rotativo automático

let time =4000, indexImage = 0,
    images = document.querySelectorAll(".slide img"),
    maxImages = images.length;

// Mudando os pointers junto com as imagens

let pointer = document.querySelectorAll(".pointer .point"),indexPointer = 0,
    maxPointer = pointer.length;


// rotaciona o banner

function rotationImage() {

    images[indexImage].classList.remove("selected"); // remove a class atual em 2 segundos da imagem
    pointer[indexPointer].classList.remove("marked"); // remove a class atual em 2 segundos do pointer

    indexImage++; //index vai até o valor 2
    indexPointer++; // vai até o valor 2

    if(indexImage >= maxImages) { // quando index chega ao maxImage(3)

        indexImage = 0;  // zera a index
        indexPointer = 0; // zera o pointer

    }

    images[indexImage].classList.add("selected"); // adiciona na primeira imagem
    pointer[indexPointer].classList.add("marked"); // adiciona na segunda imagem


}

// rotaciona a cada intervalo

function rotationStart() {

    setInterval(() => {

        rotationImage();

    }, time);

}

window.addEventListener("load", rotationStart);


// Imagens do content-2


let contentImages = document.querySelectorAll(".content-2 .image-content img");
let time2 = 200;

    contentImages.forEach(item => {

        item.addEventListener("mouseover", function() {

        setTimeout(() => {

            item.style.width = '210px';
            item.style.height = '210px';

        }, time2);
           
        
        });


    });

    contentImages.forEach(item => {

        item.addEventListener("mouseout", function() {
        
        setTimeout(() => {

            item.style.width = '200px';
            item.style.height = '200px';

        }, time2)
            

        });

    });




