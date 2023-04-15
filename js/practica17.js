
lista=["a","b","c","d"]
x=["https://andressantage.github.io/practica-grid/","https://andressantage.github.io/campus/"]

for(var i=0;i<2;i++){
    var parrafo=document.createElement("a")
    var contenedor=document.querySelector("#contenedor")
    parrafo.href=x[i]
    parrafo.textContent="hola "+i
    contenedor.appendChild(parrafo)
}
    
