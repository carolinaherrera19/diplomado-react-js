const tablas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tablas.forEach(row => {
    const id = 'boton-' + row
    const encabezadoId = 'encabezado-' + row
    const cuerpoId = 'cuerpo-' + row
    const botton = document.getElementById(id)
    botton.addEventListener('click', () => {
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
        botton.setAttribute('disabled', true)
    })
})