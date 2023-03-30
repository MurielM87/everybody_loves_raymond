let begin = 0;
function automaticCarousel() {
    setTimeout(automaticCarousel, 2600)
    let image
    const img = document.querySelectorAll('.img_amy');
    for(image = 0; image<img.length; image++) {
        img[image].style.display='none';
    }
    begin++;
    if(begin > img.length) {
        begin = 1;
    }
    img[begin -1].style.display = 'block';
}
automaticCarousel();