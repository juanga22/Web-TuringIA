document.getElementById("icon_menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}

window.onscroll = function (){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_nosotros")
    elemento1.style.bottom = posicion * 0.1 + "px"
}

// Scroll up
document.getElementById("button_up").addEventListener("click", scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if(currentScroll>0){
        window.scrollTo (0, 0);
    }
}