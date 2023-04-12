let beginner = 0;
const automaticImg = function() {
    setTimeout(automaticImg, 2300)
    let imageries
    const img = document.querySelectorAll('.img_robert');
    for(imageries = 0; imageries<img.length; imageries++) {
        img[imageries].style.display='none';
    }
    beginner++;
    if(beginner > img.length) {
        beginner = 1;
    }
    img[beginner -1].style.display = 'block';
}
automaticImg();