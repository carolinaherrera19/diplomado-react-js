// Funciones sin return y sin parametro

function nameFunction(){
    alert('Saludo desde el navegador')
    input = window.prompt("Ingresa tu nombre")
    alert("hola " + input + " soy un programa")
}

console.log('ejecutando programa')
// nameFunction()

// funcion con prametro sin return
function saludo(name){
    console.log("saludos a: " + name)
}

function multiplicacion(a, b){
    console.log("resultado: " + a * b)
}

saludo("Yurley")
saludo("Nelson")
saludo("Javi")
saludo("Maria")
r = saludo("Carlos")
console.log('r', r)
multiplicacion(3,5)

// funcion sin parametro y con retorno
function getTexto(){
    text = "Hola a todos desde el diplomado de Js y React Js"
    return text
}

my_text = getTexto()
console.log(my_text)


// funcion con parametros y return 
function sumaNumeros(a, b){
    var resultado = a + b 
    return resultado
}

a = parseInt(window.prompt("Ingresa numreo", "4"))
b = parseInt(window.prompt("Ingresa numreo", "13"))

console.log("la suma de " + a + " "  + b + " es: " + sumaNumeros(a, b))
console.log('fin del programa')