var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var bannerList = document.getElementsByClassName("bannerSlide");
    if ( n > bannerList.length) slideIndex = 1;
    else if ( n < 1) slideIndex = bannerList.length;

    for ( i = 0; i < bannerList.length; i++) {
        bannerList[i].style.display = 'none'
    }

    bannerList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
    plusDivs(1);
}, 2000);