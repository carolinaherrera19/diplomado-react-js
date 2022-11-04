const botonInicio = document.getElementById("mostrar-lista")
botonInicio.addEventListener("click", () => {
    const nombrePersonas = ['Carolina', 'Sofia', 'Sara', 'Ingrid', 'Yolanda']
    const elementoUl = document.createElement('ul')
    elementoUl.classList.add('list-group')
    nombrePersonas.forEach(nombrePersona => {
        const saludo = 'Bienvenida, hola ' + nombrePersona;
        const li = document.createElement('li');
        li.classList.add('list-group-item')
        li.innerText = saludo;
        elementoUl.appendChild(li)
    })
    const divContenido = document.getElementById('contenido')
    const elementoH1 = document.createElement('h1')
    elementoH1.setAttribute('id', 'bienvenida')
    elementoH1.innerText = 'Bienvenidas!!'
    divContenido.appendChild(elementoH1)
    divContenido.appendChild(elementoUl)
})

const botonLimpiar = document.getElementById('limpiar')
botonLimpiar.addEventListener("click", () => {
    const divContenido = document.getElementById('contenido')
    const firstChild = divContenido.getElementsByTagName('ul')
    if (firstChild[0]) {
        divContenido.getElementsByTagName('h1')[0].remove()
        divContenido.removeChild(firstChild[0])
    }
})