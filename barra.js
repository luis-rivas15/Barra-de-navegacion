
document.getElementById("icono").addEventListener("click", mostrar_menu);

nav = document.getElementById("navv");
back = document.getElementById("back_menu")

function mostrar_menu (){

nav.style.right = "0px";
back.style.display = "block";

}

back.addEventListener("click", ocultar_menu);

function ocultar_menu(){
    
    nav.style.right = "-300px";
    back.style.display = "none";
    
}


