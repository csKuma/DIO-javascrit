
const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitro
const valorGasto = litrosConsumidos * precoCombustivel

console.log('litrosConsumidos', litrosConsumidos)
console.log('valor gasto', valorGasto.toFixed(2))


