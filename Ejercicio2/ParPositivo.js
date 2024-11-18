const a = parseFloat(prompt("Numero: "));
function ParPositivo(a){
    return a % 2 === 0 && a > 0
}

alert("¿El numero " + a + " es par y positivo?   " + ParPositivo(a))