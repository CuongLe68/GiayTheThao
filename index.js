const IMG_WIDTH = -150;
const sileContainer = document.querySelector('.slides')

let index = 0;

document.querySelector('.btn-next').onclick = () => {
    if(index < 4 ) {
        index ++;
        sileContainer.style.transition = '0.5s ease-in'
        sileContainer.style.transform = `translateX(${IMG_WIDTH * index}rem)`
    }
    else {
        index=0;
        sileContainer.style.transition = '0.3s ease-in'
        sileContainer.style.transform = `translateX(${IMG_WIDTH * index}rem)`
    }
}

document.querySelector('.btn-prev').onclick = () => {
    if(index>0) {
        index--;
        sileContainer.style.transition = `0.5s ease-in`;
        sileContainer.style.transform = `translateX(${IMG_WIDTH * index}rem)`
    }
    else {
        index = 4;
        sileContainer.style.transition = `0.3s ease-in`;
        sileContainer.style.transform = `translateX(${IMG_WIDTH * index}rem)`
    }
}