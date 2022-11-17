function validarNota(event) {
    const element = document.getElementById(event.target.id)
    let value = +event.target.value
    if (value > 5) {
        value = 5
        element.value = value
    }
    if (value >= 3 && value <= 5) {
        element.classList.remove('is-invalid')
        element.classList.add('is-valid')
    } else {
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
    }
    return value
}

function calcularPonderado(nota, porcentajePorNota) {
    return (nota * porcentajePorNota) / 100
}

function agregarPonderadoPorLaboratorio(id, nota) {
    document.getElementById(id).innerText = nota.toFixed(2)
    let notaPractica = 0
    const idsPracticas = [1, 2, 3, 4, 5, 6, 7, 8]
    idsPracticas.forEach(consecutivo => {
        notaPractica += +document.getElementById(`resultado-lab-${consecutivo}`).innerHTML
    })
    document.getElementById('nota-practica').innerText = calcularPonderado((notaPractica / 8), 80).toFixed(2)
}


function calculadora() {
    const idsPracticas = [1, 2, 3, 4, 5, 6, 7, 8]
    idsPracticas.forEach(id => {
        const prePreInformeInputId = `lab-pre-informe-${id}` // 'lab-pre-informe-' + id
        const preLaboratorioInputId = `lab-laboratorio-${id}`
        const preInformeInputId = `lab-informe-${id}`
        const resultadoPorLaboratorioId = `resultado-lab-${id}`
        document.getElementById(prePreInformeInputId).addEventListener('change', (event) => {
            const notaActual = validarNota(event)
            const valorXNota = 100 / 3

            const ponderadoPreInforme = calcularPonderado(notaActual, valorXNota)
            const ponderadoLaboratorio = calcularPonderado(+document.getElementById(preLaboratorioInputId).value, valorXNota)
            const ponderadoInforme = calcularPonderado(+document.getElementById(preInformeInputId).value, valorXNota)

            const notaPorLaboratorio = ponderadoPreInforme + ponderadoLaboratorio + ponderadoInforme
            agregarPonderadoPorLaboratorio(resultadoPorLaboratorioId, notaPorLaboratorio)
        })
        document.getElementById(preLaboratorioInputId).addEventListener('change', (event) => {
            const notaActual = validarNota(event)
            const valorXNota = 100 / 3

            const ponderadoPreInforme = calcularPonderado(+document.getElementById(prePreInformeInputId).value, valorXNota)
            const ponderadoLaboratorio = calcularPonderado(notaActual, valorXNota)
            const ponderadoInforme = calcularPonderado(+document.getElementById(preInformeInputId).value, valorXNota)

            const notaPorLaboratorio = ponderadoPreInforme + ponderadoLaboratorio + ponderadoInforme
            agregarPonderadoPorLaboratorio(resultadoPorLaboratorioId, notaPorLaboratorio)
        })
        document.getElementById(preInformeInputId).addEventListener('change', (event) => {
            const notaActual = validarNota(event)
            const valorXNota = 100 / 3

            const ponderadoPreInforme = calcularPonderado(+document.getElementById(prePreInformeInputId).value, valorXNota)
            const ponderadoLaboratorio = calcularPonderado(+document.getElementById(preLaboratorioInputId).value, valorXNota)
            const ponderadoInforme = calcularPonderado(notaActual, valorXNota)

            const notaPorLaboratorio = ponderadoPreInforme + ponderadoLaboratorio + ponderadoInforme
            agregarPonderadoPorLaboratorio(resultadoPorLaboratorioId, notaPorLaboratorio)
        })
    })
}
calculadora()