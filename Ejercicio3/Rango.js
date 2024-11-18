const numero100 = parseInt(prompt("Introduzca un numero: "));

const min = parseInt(prompt("Introduzca un numero minimo: "));

const max = parseInt(prompt("Introduzca un numero maximo: "));

function rango(min,max,numero100){
    return(numero100 >= min && numero100 <= max)
}

if(rango(min,max,numero100)){
    alert("El numero esta en el rango")
}
else{
    alert("El numero no esta en el rango")
}

   
