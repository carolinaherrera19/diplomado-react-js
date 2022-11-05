const tablas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tablas.forEach(row => {
    const id = 'boton-' + row
    const idBotonOcultar = 'boton-ocultar-' + row
    const encabezadoId = 'encabezado-' + row
    const cuerpoId = 'cuerpo-' + row
    const boton = document.getElementById(id)
    const botonOcultar = document.getElementById(idBotonOcultar)
    boton.addEventListener('click', () => {
        const trEncabezados = document.createElement('tr')
        const thOperacion = document.createElement('th')
        thOperacion.innerText = 'Multiplicacion'
        const thResultado = document.createElement('th')
        thResultado.innerText = 'Resultado'
        trEncabezados.appendChild(thOperacion)
        trEncabezados.appendChild(thResultado)
        document.getElementById(encabezadoId).appendChild(trEncabezados)
        tablas.forEach(j => {
            const trResultados = document.createElement('tr')
            const trOperacion = document.createElement('td')
            trOperacion.innerText = row + ' * ' + j
            const rResultado = document.createElement('td')
            rResultado.innerText = row * j
            trResultados.appendChild(trOperacion)
            trResultados.appendChild(rResultado)
            document.getElementById(cuerpoId).appendChild(trResultados)
        })
        botonOcultar.removeAttribute('disabled')
        boton.setAttribute('disabled', true)
    })
    botonOcultar.addEventListener('click', () => {
        const encabezados = document.getElementById(encabezadoId)
        while (encabezados.lastElementChild) {
            encabezados.removeChild(encabezados.lastElementChild);
        }
        const detalles = document.getElementById(cuerpoId)
        while (detalles.lastElementChild) {
            detalles.removeChild(detalles.lastElementChild);
        }
        botonOcultar.setAttribute('disabled', true)
        boton.removeAttribute('disabled')
    })
})