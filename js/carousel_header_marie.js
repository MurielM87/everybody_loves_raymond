let erste = 0;
function automaticImages() {
    setTimeout(automaticImages, 2900)
    let bilder
    const img = document.querySelectorAll('.img_marie');
    for(bilder = 0; bilder<img.length; bilder++) {
        img[bilder].style.display='none';
    }
    erste++;
    if(erste > img.length) {
        erste = 1;
    }
    img[erste -1].style.display = 'block';
}
automaticImages();