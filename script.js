let funcion = prompt(`¿Qué operación quiere realizar?\n • suma \n • resta \n • multiplicacion \n • division`)
let num1 = parseInt(prompt(`Ingrese el num1`))
let num2 = parseInt(prompt(`Ingrese el num2`))
let results = {
  suma: [],
  resta: [],
  multiplicacion: [],
  division: []
}

function suma(a, b) {
  let res = a + b
  results.suma.push(res)
  return res
}
function resta(a, b) {
  let res = a - b
  results.resta.push(res)
  return res
}
function multiplicacion(a, b) {
  let res = a * b
  results.multiplicacion.push(res)
  return res
}
function division(a, b) {
  let res = a / b
  results.division.push(res)
  return res
}


if (funcion === "suma") {
  console.log(suma(num1, num2))
  console.log(results)
} else if (funcion === "resta") {
  console.log(resta(num1, num2))
  console.log(results)
} else if (funcion === "multiplicacion") {
  console.log(multiplicacion(num1, num2))
  console.log(results)
} else if (funcion === "division") {
  console.log(division(num1, num2))
  console.log(results)
}