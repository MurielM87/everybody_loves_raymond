let first = 0;
const automaticPictures = function() {
    setTimeout(automaticPictures, 2800)
    let pictures
    const img = document.querySelectorAll('.img_frank');
    for(pictures = 0; pictures<img.length; pictures++) {
        img[pictures].style.display='none';
    }
    first++;
    if(first > img.length) {
        first = 1;
    }
    img[first -1].style.display = 'block';
}
automaticPictures();