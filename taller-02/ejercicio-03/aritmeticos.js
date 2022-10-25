function calculation() {
    const numberChicken = +document.getElementById("number-chicken").value
    const chickenByGuacal = +document.getElementById("chicken-by-guacal").value
    const guacalesCountByHeight = +document.getElementById("guacales-count-by-height").value
    const guacalesCountByWidth = +document.getElementById("guacales-count-by-width").value
    const guacalesCountByLarge = +document.getElementById("guacales-count-by-large").value
    const response = document.getElementById("response")

    const guacalByTruck = guacalesCountByHeight * guacalesCountByWidth * guacalesCountByLarge
    const chickenByTruck = guacalByTruck * chickenByGuacal

    const necessaryTrucks = Math.round(numberChicken / chickenByTruck)

    response.value = necessaryTrucks
}