document.addEventListener("DOMContentLoaded",function(){
    const boton = document.getElementById("principal__cambio__color");
    const letra = document.getElementById("color");
    const body = document.getElementById("body");
    
/*Ahora vamos a crear una tupla con los colores que queremos selecionar aleatoriamente */
    const color = ["Red","Green","Blue","Yellow","Pink","Purple","Orange","Brown","Black","White","burlywood","blanchedalmond","paleturquoise","salmon","tan","goldenrod","lightskyblue","sandybrown","grey","chartreuse"];

    
    let i = 1;


/*Vamos a añadir un evento al boton, haciendo click, para ello declaramos una variable que es random, la cual contiene la funcion de aleatorio */
/*Ponemos solo random la letra.style.color, debido a que esta ya va a saber antes cual es el color que toca aleatoriamente, los demas contienen el color que se le selecciona anteriormente */
    boton.addEventListener("click", function(){
        
        let random = Math.floor(Math.random()*color.length);
       
        
        body.style.background = color[i];
        letra.innerHTML = color[i];
        boton.style.background = color[i];
        letra.style.color = color[random];

        i = random;
    });

});