function tomarAnimal(){
    //Aqui en este caso animales se convierte en una lista de animales debido a que hay varios animales    
    var animales=document.getElementsByClassName("animal")
    console.log(animales.length)
    for(var i=0;i<animales.length;i++){
        console.log(animales[i].textContent)
    }
}