// verificar se numero é divisivel por 2
/*
const numero = 2;

const numeroPar = (numero % 2) === 0;

if (numero === 0) {
    console.log('numero invalido')
} else
    if (numeroPar) {
        console.log('par')
    } else {
        console.log('impar')
    }
    */


const tipoCombustivel= 5;
const precoEtanol = 5.90;
const precoGasolina= 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 1580;


if(tipoCombustivel===1){
    console.log('etanol')
    calcularValor(precoEtanol,distanciaEmKm,kmPorLitro)
}else if(tipoCombustivel===2){
    console.log('gasolina')
    calcularValor(precoGasolina,distanciaEmKm,kmPorLitro)
}else{
    console.log('parametro invalido')
}

function calcularValor(preco,distanciaEmKm,kmPorLitro){
const litrosConsumidos = distanciaEmKm / kmPorLitro
const valorGasto = litrosConsumidos * preco
console.log('litrosConsumidos', litrosConsumidos)
console.log('valor gasto', valorGasto.toFixed(2))
}