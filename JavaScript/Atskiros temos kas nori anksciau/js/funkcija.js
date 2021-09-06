console.log('Funkcija');
// Funkcija tai perpanaudojas kodo blokas. Ją galima naudoti daug kartų.
// Pirmiausia turime aprašyti funkciją. Funkcijos aprašas susideda iš šių dalių:
//  - funkcijos pavadinimas -> naudojamas tam kad ją iškviesti. Taip pat funkcijos pavadinimas turėtų sufleruoti jos veikimą.
//  - argumentų sąrašas -> tai priimamų kintamųjų sąrašas, kuriuos galime pasivadinti kaip tik norime, jie taip pat turėtų sufleruoti savo paskirtį.
//  - vykdymo blokas -> tai perpanaudojama kodo dalis, kuri įvyks kiekvieną kartą, kuomet bus iškviečiama funkcija
//  - funkcijos grąžinimas -> tai reikšmės grąžinimas į funkcijos iškvietimo vietą. Tai įvykdoma panaudojant direktyvą 'return';
// Aprašius funkciją galime ją iškviesti, parašius funkcijos pavadinimą ir šalia jo paprastus skliaustelius. Jeigu reikia, skliausteliuose galime
// perduoti kintamuosius, kurie vadinami parametrais.
// Funkcijos kvietinys/iškvietimas gali (bet ne visada) grąžinti reikšmę, kuri bus panaudota funkcijos iškvietimo vietoje. 

// Funkcijos aprašas ( function declaration)
//             ↓ - funkcijos pavadinimas, kuris naudojamas jos kodui iškviesti
function nueitasKelias(greitis, laikas) // → funkcijos antraštė ( function header)
//                         ↑       ↑    - tarp skliaustų parašyti įeinamieji kintamieji vadinami ARGUMENTAIS
{ // → → → → → → → → → → → → Perpanaudojamo kodo bloko pradžia/atidarymas  → → → → → → → → → → → → → → → → 
  return greitis * laikas; //                                                                             ← Funkcijos kūnas (function body)
  // ↑ - direktyva 'return' grąžina po return žodžio aprašytą reikšmę į funkcijos IŠKVIETIMO VIETĄ        ← vykdymo blokas. (function implementation)
} // → → → → → → → → → → → → Perpanaudojamo kodo bloko pabaiga/uždarymas   → → → → → → → → → → → → → → → → 

//                 ↓  funkcijos iškvietimas (function invocation/ function call)
let kelias1 = nueitasKelias(5, 20); // kelias1 kintamojo reikšmė bus tokia, kokią GRĄŽINS funkcija.
//                          ↑  ↑ - kintamieji kurie perduodami funkcijai vadinami parametrais.
console.log(kelias1);
console.log(nueitasKelias(7, 10));
console.log(nueitasKelias(9, 18));

function kvadratoPlotas(krastine) {
  return krastine ** 2;
}

function staciakampioPlotas(aukstis, plotis) {
  return aukstis * plotis;
}

function trikampioPlotas(krastine1, krastine2, kampasTarpJu) {
  return krastine1 * krastine2 * Math.sin(kampasTarpJu * Math.PI / 180) / 2;
}

// Suskaičiuokite figūrų plotus
// 1)
let task1 = staciakampioPlotas(7, 10);
console.log('task1:', task1);
// 2)
let task2 = kvadratoPlotas(6);
console.log('task2:', task2);
// 3)
let task3 = trikampioPlotas(8, 7, 65);
console.log('task3:', task3);
// 4)
let task4 = 2 * staciakampioPlotas(5, 8) - kvadratoPlotas(2);
console.log('task4:', task4);
// 5)
let task5 = 6 * trikampioPlotas(3, 3, 60);
console.log('task5:', task5);
// 6)
let task6 = 7/8 * staciakampioPlotas(6, 12);
console.log('task6:', task6);

