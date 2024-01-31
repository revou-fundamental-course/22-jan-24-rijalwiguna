function validateForm() {
    const name = document.forms["form-validate"]["name"].value;
    const email = document.forms["form-validate"] ["email"].value;
    const phone = document.forms["form-validate"] ["number-phone"].value;
    const messages = document.forms["form-validate"] ["messages"].value;

    if (name == "") {
        alert("Tidak boleh kosong ")
        return false;
    }
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-phone").innerHTML = phone;
    document.getElementById("sender-messages").innerHTML = messages;

    return false;
}


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


