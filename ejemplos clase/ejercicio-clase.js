function saludoPorHorario() {
    // const hora = new Date().getHours();
    const hora = 10
    if (hora >= 6 && hora <= 12) {
        console.log("Hola Buenos dias")
    } else if (hora >= 12 && hora <= 18) {
        console.log("Hola Buenas tardes")
    } else if (hora >= 18 && hora <= 23) {
        console.log("Hola Buenas noches")
    } else {
        console.log("Es muy tarde deberias estar durmiendo")
    }
}
saludoPorHorario()
