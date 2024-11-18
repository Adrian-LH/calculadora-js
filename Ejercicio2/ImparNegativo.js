const b = parseFloat(prompt("Numero: "));
function ImparNegativo(b){
    return b % 2 !== 0 && b < 0 //Verdadero o falso
}

alert("¿El numero " + b + " es impar y negativo?   " + ImparNegativo(b))
