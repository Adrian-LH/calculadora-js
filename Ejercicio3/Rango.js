const numero100 = parseInt(prompt("Introduzca un numero: "));

const max = 20;

const min = 10;

function rango(min,max,numero100){
    if(min <= numero100 && max >= numero100){
        alert("El numero esta en el rango")
    }
    else{
        alert("El numero no esta en el rango")
    }
}

rango()
   
