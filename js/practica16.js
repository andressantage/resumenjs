function tomarDatos(){
    var etiqueta=document.querySelectorAll("p")
    var clase=document.querySelectorAll(".clase")
    for(var i=0;i<etiqueta.length;i++) {
        console.log(etiqueta[i].textContent)
    }
    for(var i=0;i<clase.length;i++) {
        console.log(clase[i].textContent)
    }
}