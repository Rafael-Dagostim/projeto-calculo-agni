let Tamb = 18; // Temperatura do ambiente
let To = 80; // Temperatura inicial
let T1 = 76; // Temperatura no primeiro instante
let t1 = 2; // Tempo no primeiro instante

let k = -Math.log((T1 - Tamb) / (To - Tamb)) / t1;

function T(t) {
  return Tamb + (To - Tamb) * Math.exp(-k * t);
}

let ToCopy = To;
let instant = 1

console.log(`Valor de K: ${k}`);

while (ToCopy > Tamb) {
  ToCopy = Math.round(T(instant));
  console.log(`Instante ${instant}: ${ToCopy}`);
  instant++;
}
