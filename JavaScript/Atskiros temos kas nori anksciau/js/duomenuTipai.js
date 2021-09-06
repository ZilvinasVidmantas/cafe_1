'use strict';

console.log('-- Duomenų tipai --');
console.log('-- -- Primityvieji duomenų tipai');
console.log('-- -- -- Number');
let a = Number('7'); // String tipo kintamojo konversija į skaičiaus tipą
let b = 15.69;
let c = -6168465.351651496;
let d = 946 * 4665 - 78 / 36 ** (1 / 18);
console.table([
  { variable: 'a', value: a, dataType: typeof a },  //    typeof __kintamasis__,
  { variable: 'b', value: b, dataType: typeof b },  // atspausdina duomenų tipą
  { variable: 'c', value: c, dataType: typeof c },  // string formatu
  { variable: 'd', value: d, dataType: typeof d }
]);

console.log('-- -- -- String');
let e = 'Labas';
let f = "Vakaras";
let g = `${e}-${f}!`;
let h = String(789); // Number tipo kintamojo konversija į String tipą
console.table([
  { variable: 'e', value: e, dataType: typeof e },
  { variable: 'f', value: f, dataType: typeof f },
  { variable: 'g', value: g, dataType: typeof g },
  { variable: 'h', value: h, dataType: typeof h }
]);

console.log('-- -- -- Boolean');
// Boolean to Number -> Jei 0 - false, visais kitais atvejais - true
// Boolean to String -> Jei '' - false, visais kitais atvejais - true
let arUzvakarBuvoKarsta = Boolean(0);
let arVakarBuvoKarsta = Boolean('false');
let arSiandienNukritoTemperatura = false;
// let siandienLija = arUzvakarBuvoKarsta && arVakarBuvoKarsta && arSiandienNukritoTemperatura; // Reikia visko
// let siandienLija = arUzvakarBuvoKarsta || arVakarBuvoKarsta || arSiandienNukritoTemperatura; // Reikia bent kažko
// Lis jeigu buvo karštą užvakar, arba/ir buvo karštą vakar IR  šiandien nukrito temperatūra.
let siandienLija = arUzvakarBuvoKarsta || arVakarBuvoKarsta && arSiandienNukritoTemperatura; 
console.table([
  { variable: 'arUzvakarBuvoKarsta', value: arUzvakarBuvoKarsta, dataType: typeof arUzvakarBuvoKarsta },
  { variable: 'arVakarBuvoKarsta', value: arVakarBuvoKarsta, dataType: typeof arVakarBuvoKarsta },
  { variable: 'arSiandienNukritoTemperatura', value: arSiandienNukritoTemperatura, dataType: typeof arSiandienNukritoTemperatura },
  { variable: 'siandienLija', value: siandienLija, dataType: typeof siandienLija }
]);


