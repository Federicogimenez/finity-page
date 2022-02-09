var div2 = document.getElementById("div2-1");
var div22 = document.getElementById("div2-2");
var jeresDiv = document.querySelector(".el-div-de-jere");
var header = document.getElementById("header");
var div23 = document.querySelector(".div2-3-flex")
var threeDiv1 = document.getElementById("three-div-float-1");
var threeDiv2 = document.getElementById("three-div-float-2");
var threeDiv3 = document.getElementById("three-div-float-3");
var wireless = document.getElementById("wireless");
var imgProduct = document.getElementById("img-product-of-day");
var divProduct = document.getElementById("product-of-day");
var div4 = document.getElementById("div4")

function scrolleando (){
    let scrollTop = document.documentElement.scrollTop;
    let scrollDiv = div2.offsetTop - 550;
    let scrollHeader1 = header.offsetTop + 70;
    let scrollHeader2 = header.offsetTop + 600;
    let scrolldiv23 = div23.offsetTop - 500;
    let scrollImgProduct = imgProduct.offsetTop -500;
    let scrollWireless = wireless.offsetTop + 1400;
    let scrollDiv4 = div4.offsetTop -450

    console.log(scrollTop);
    if (scrollDiv < scrollTop){
        div2.style.opacity = 1;
        jeresDiv.classList.add("wow");
    }
    if(scrollTop > scrollHeader1 && scrollTop < scrollHeader2){
        header.style.opacity = 0;
    }else{
        header.style.opacity = 1;
    }
    if (scrollTop > scrolldiv23){
        div23.style.opacity = 1;
        threeDiv1.classList.add("three-div-float-11");
        threeDiv2.classList.add("three-div-float-22");
        threeDiv3.classList.add("three-div-float-33");
    }
    if (scrollTop > scrollImgProduct){
        imgProduct.classList.add("img-product-translate")
        divProduct.classList.add("div-product-translate")
    }
    if (scrollTop > scrollWireless){
        wireless.classList.add("wireless-transform")
    }
    if (scrollTop > scrollDiv4){
        div4.classList.add("div4-effect")
    }

}
window.addEventListener("scroll" , scrolleando);