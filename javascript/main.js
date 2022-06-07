function bigImg(e) {
e.style.width = 400px;
e.style.height = 400px;
}

function normalImg(e) {
e.style.width = 350px;
e.style.height = 350px;
}

const image = document.getElementsByClassName('image');
image.addEventListener('mouseenter', bigImg);
image.addEventListener('mouseleave', normalImg);
