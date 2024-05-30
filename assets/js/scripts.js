const precio = 400000
let total = 0
let cantidad = 0

precioInicial = document.querySelector("#precio-inicial");
precioInicial.innerHTML = precio

cantidadSpan = document.querySelector("#cantidad")
cantidadSpan.innerHTML = cantidad

totalSpan = document.querySelector("#valor-total")

btnSuma = document.querySelector("#suma")
btnResta = document.querySelector("#resta")

// function suma() {
//     cantidad += 1 // cantidad = cantidad + 1
//     cantidadSpan.innerHTML = cantidad
//     total = precio * cantidad
//     totalSpan.innerHTML = total
// }


// function resta() {
//     if (cantidad < 1) {
//         cantidad = 10
//     } else {
//         cantidad -= 1
//     }

//     cantidadSpan.innerHTML = cantidad
//     total = precio * cantidad
//     totalSpan.innerHTML = total
// }

// btnSuma.addEventListener('click', suma)
// btnResta.addEventListener('click', resta)

btnSuma.addEventListener('click', () => {
    cantidad += 1
    cantidadSpan.innerHTML = cantidad
    total = precio * cantidad
    totalSpan.innerHTML = total
}
)

btnResta.addEventListener('click', () => {
    
// VALIDACIÓN DE CANTIDAD, EVITA MENOS DE CERO - NO LO HEMOS PASADO AUN 

if (cantidad < 1) {
    cantidad = 0
} else {
    cantidad -= 1
}

// VALIDACIÓN DE CANTIDAD

cantidadSpan.innerHTML = cantidad
total = precio * cantidad
totalSpan.innerHTML = total
}
)

