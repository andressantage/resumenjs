function seleccionar(){
    var d1=document.getElementById("d1")
    //Se poner en caso de solo seleccionar la etiqueta html p, solo se tomar el valor dentro de p
    var etiqueta=document.querySelector("p")
    //Para id
    var id=document.querySelector("#id")
    //Para clase
    var clase=document.querySelector(".clase")
    d1.innerHTML=etiqueta.textContent
    console.log(etiqueta.textContent)
    console.log(id.textContent)
    console.log(clase.textContent)
}
