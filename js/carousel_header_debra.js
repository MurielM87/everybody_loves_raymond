let start = 0;
const automaticSlider = function() {
    setTimeout(automaticSlider, 2500)
    let images
    const img = document.querySelectorAll('.img_debra');
    for(images = 0; images<img.length; images++) {
        img[images].style.display='none';
    }
    start++;
    if(start > img.length) {
        start = 1;
    }
    img[start -1].style.display = 'block';
}
automaticSlider();