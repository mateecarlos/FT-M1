'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var sum = 0
  var numInvertido = num.split('').reverse().join(''); // Invierto el numero

  for (var i = 0; i < numInvertido.length; i++) {
    sum = sum + numInvertido[i] * 2 ** i;
  }

  return sum;

}

function DecimalABinario(num) {
  // tu codigo aca
  
  return num.toString(2)
}

//a
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}