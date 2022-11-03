/* inicio = 0
fin = 10

for (let index = inicio; index < fin; index++) {
    console.log(index)

}
console.log("fin")  */

//for
/* inicio = 0
fin = 10
fin = window.prompt("cuantos valores deseas ingresar")

for (let index = inicio; index < fin; index++) {
    console.log(index)
    valor = parseInt(window.prompt('ingrese el numero para hacer el ciclo: '))
    console.log("ingresaste ", valor)
} */

//while

/* contador = 0
bandera = true
while (bandera) {
    console.log('ejercicio de while')
    console.log(contador)
    contador = contador + 1
    if (contador > 5) {
      break
    }
    value = window.prompt('insert de control: ')
    // console.log(value)
}
console.log('el total es') */

// let contador2 = 0;
// let sumatotal = 0;
// alert("este programa suma hasta que el usuario digite  0")
// while (true) {
//     let numsuma = parseInt(window.prompt("ingrese el numero que quiere sumar: "));
//     if (numsuma == 0){
//         break
//     }
// sumatotal += numsuma ;
// }
// console.log('el total es:' + sumatotal)


alert("Bienvenido a su simulador de credito")
deuda = parseInt(window.prompt("cual es el valor del credito que quieres"))
tasa = parseInt(window.prompt("ingresa el porcentaje de tasa de interes")
cuota = parseInt(window.prompt("digite el valor del abono mensual al credito")


contenido = document.getElementById('contenido')
contenido.innerHTML = 'Resultado: ' + resultado;
console.log('termine: showInfo')
