const a = prompt("Numero: ")
const Numero = Number(a)
function ParPositivo(Numero){
    return a % 2 === 0 && a > 0
}

alert("¿El numero" + a + "es par y positivo?   " + ParPositivo(Numero))
