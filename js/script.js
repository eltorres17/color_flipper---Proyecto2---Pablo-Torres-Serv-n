document.addEventListener("DOMContentLoaded",function(){
    const boton = document.getElementById("principal__cambio__color");
    const letra = document.getElementById("color");
    const body = document.getElementById("body");
    

    const color = ["Red","Green","Blue","Yellow","Pink","Purple","Orange","Brown","Black","White","burlywood","blanchedalmond","paleturquoise","salmon","tan","goldenrod","lightskyblue","sandybrown","grey","chartreuse"];

    
    let i = 1;



    boton.addEventListener("click", function(){
        
        let random = Math.floor(Math.random()*color.length);
       
        
        body.style.background = color[i];
        letra.innerHTML = color[i];
        boton.style.background = color[i];
        letra.style.color = color[random];

        i = random;
    });

});