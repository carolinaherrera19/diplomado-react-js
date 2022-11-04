const botonInicio = document.getElementById("saludar")
botonInicio.addEventListener("click", () => {
    const saludo = 'Hola compañeros del diplamado ReactJS'
    const elementH1 = document.createElement('h1')
    elementH1.innerText = saludo
    const divContenido = document.getElementById('contenido')
    divContenido.appendChild(elementH1)
})

const botonLimpiar = document.getElementById("limpiar")
botonLimpiar.addEventListener("click", () => {
    const divContenido = document.getElementById('contenido')
    const firstChild = divContenido.getElementsByTagName('h1')
    if (firstChild[0]) {
        divContenido.removeChild(firstChild[0])
    }
})