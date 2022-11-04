console.log('estoy cargando las definiciones')

// document.getElementById("myBtnSuma").addEventListener("click", showInfo);
// document.getElementById("myBtnResta").addEventListener("click", showResta);
// console.log('definir una funcion')

function showInfo() {
    console.log('ejecutando: showInfo')
    a = parseInt(document.getElementById('valor_1').value);
    b = parseInt(document.getElementById('valor_2').value);
    resultado = a + b
    // alert('la suma de los inputs es: '+ (a + b))
    contenido = document.getElementById('contenido')
    contenido.innerHTML = 'Resultado: ' + resultado;
    console.log('termine: showInfo')

}

function showResta() {
    a = parseInt(document.getElementById('valor_1').value);
    b = parseInt(document.getElementById('valor_2').value);
    resultado = a - b
    // alert('la suma de los inputs es: '+ (a + b))
    contenido = document.getElementById('contenido')
    contenido.innerHTML = 'Resultado: ' + resultado;
}


// console.log('voy a ejecutar una funcion')
// showInfo()
// console.log('ya termine de ejecutar la fucion')
// // showInfo_4()

function showInfo_2(){
    console.log('esto ejecuta showInfo_2')
}