'use-strict'

const resultadoLaboratorioId = 'resultado-laboratorios'
const resultadoExamenFinalId = 'examen-final'

function addClassValidInvalid(value, element, classValid = 'is-valid', classInvalid = 'is-invalid') {
    if (value >= 3 && value <= 5) {
        element.classList.remove(classInvalid)
        element.classList.add(classValid)
    } else {
        element.classList.remove(classValid)
        element.classList.add(classInvalid)
    }
}

function validarNota(event) {
    const element = document.getElementById(event.target.id)
    let value = +event.target.value
    if (value > 5) {
        value = 5
        element.value = value
    }
    addClassValidInvalid(value, element)
    return value
}

function calcularPonderado(nota, porcentajePorNota) {
    return (nota * porcentajePorNota) / 100
}

function calcularNotaFinal() {
    const elementNotaFinal = document.getElementById('nota-final')
    const elementNotaTeorica = document.getElementById('nota-teorica')
    const elementNotaPractica = document.getElementById('nota-practica')

    const notaTeorica = calcularPonderado(+elementNotaTeorica.innerText, 80)
    const notaPractica = calcularPonderado(+elementNotaPractica.innerText, 20)

    const notaFinal = notaTeorica + notaPractica
    addClassValidInvalid(Math.trunc(notaFinal), elementNotaFinal, 'alert-success', 'alert-danger')
    elementNotaFinal.innerText = notaFinal.toFixed(2)
}

function calcularNotaPractica() {
    const elementNotaPractica = document.getElementById('nota-practica')
    const elementResultadosLaboratorios = document.getElementById(resultadoLaboratorioId)
    const elementExamenFinal = document.getElementById(resultadoExamenFinalId)

    const notaResultadosLaboratorios = calcularPonderado(+elementResultadosLaboratorios.value, 80)
    const notaExamenFinal = calcularPonderado(+elementExamenFinal.value, 20)

    const notaPractica = notaResultadosLaboratorios + notaExamenFinal
    addClassValidInvalid(Math.trunc(notaPractica), elementNotaPractica, 'text-bg-success', 'text-bg-danger')
    elementNotaPractica.innerText = notaPractica.toFixed(2)
    calcularNotaFinal()
}

function agregarPonderadoPorLaboratorio(id, nota) {
    const elementoLaboratorio = document.getElementById(id)
    addClassValidInvalid(Math.trunc(nota), elementoLaboratorio, 'text-bg-success', 'text-bg-danger')
    elementoLaboratorio.innerText = nota.toFixed(2)
    let notaPractica = 0
    const idsPracticas = [1, 2, 3, 4, 5, 6, 7, 8]
    idsPracticas.forEach(consecutivo => {
        notaPractica += +document.getElementById(`resultado-lab-${consecutivo}`).innerHTML
    })
    const elementResultadoLaboratorios = document.getElementById('resultado-laboratorios')
    const notaLabotarios = (notaPractica / 8)
    addClassValidInvalid(notaLabotarios, elementResultadoLaboratorios)
    elementResultadoLaboratorios.value = notaLabotarios.toFixed(2)
    calcularNotaPractica()
}

function calcularNotaPorLaboratorio(ids, resultadoPorLaboratorioId) {
    const valorXNota = 100 / 3
    const notaPorLaboratorio = ids.reduce((pre, cur) => {
        const nota = +document.getElementById(cur).value
        pre += calcularPonderado(nota, valorXNota)
        return pre;
    }, 0)
    agregarPonderadoPorLaboratorio(resultadoPorLaboratorioId, notaPorLaboratorio)
}

function calculadora() {
    const idsPracticas = [1, 2, 3, 4, 5, 6, 7, 8]
    idsPracticas.forEach(id => {
        const prePreInformeInputId = `lab-pre-informe-${id}` // 'lab-pre-informe-' + id
        const preLaboratorioInputId = `lab-laboratorio-${id}`
        const preInformeInputId = `lab-informe-${id}`
        const resultadoPorLaboratorioId = `resultado-lab-${id}`
        const elementsIds = [prePreInformeInputId, preLaboratorioInputId, preInformeInputId]
        document.getElementById(prePreInformeInputId).addEventListener('change', (event) => {
            validarNota(event)
            calcularNotaPorLaboratorio(elementsIds, resultadoPorLaboratorioId)
        })
        document.getElementById(preLaboratorioInputId).addEventListener('change', (event) => {
            validarNota(event)
            calcularNotaPorLaboratorio(elementsIds, resultadoPorLaboratorioId)
        })
        document.getElementById(preInformeInputId).addEventListener('change', (event) => {
            validarNota(event)
            calcularNotaPorLaboratorio(elementsIds, resultadoPorLaboratorioId)
        })
    })
    const idsRootPractidas = [resultadoLaboratorioId, resultadoExamenFinalId]
    idsRootPractidas.forEach(elementId => {
        document.getElementById(elementId).addEventListener('change', (event) => {
            validarNota(event)
            calcularNotaPractica()
        })
    })
}
calculadora()

function onChangeElementosNotasTeoricas() {
    const elementoNotaTeorica = document.getElementById('nota-teorica')
    const metaElementos = [
        { id: 'examen-1', ponderado: 20 },
        { id: 'examen-2', ponderado: 20 },
        { id: 'examen-3', ponderado: 20 },
        { id: 'quices', ponderado: 20 },
        { id: 'asistencia', ponderado: 10 },
        { id: 'proyecto-final', ponderado: 10 },
    ]

    const notaTeorica = metaElementos.reduce((pre, cur) => {
        const actualElemento = document.getElementById(cur.id)
        const nota = +actualElemento.value
        if (nota > 5) {
            nota = 5
            actualElemento.value = nota
        }
        addClassValidInvalid(nota, actualElemento)
        pre += calcularPonderado(nota, cur.ponderado)
        return pre
    }, 0)
    addClassValidInvalid(Math.trunc(notaTeorica), elementoNotaTeorica, 'text-bg-success', 'text-bg-danger')
    elementoNotaTeorica.innerText = notaTeorica.toFixed(2)
    calcularNotaFinal()
}