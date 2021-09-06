/*  Dažnai programavime reikia kartoti kodą (su mažom variacijom) daug kartų:
  - rikiavimui, filtravimui, atrinkimui, validacijai, ir kitiems algoritmams.
  Tokiam tikslui mums praverčia progravaimo įrankis - ciklas.
  Ciklai yra kelių rūšių, bet pasižymi tais pačias kriterijais. 
  Ciklas privalo turėti tokius 3 logines sudedamąsias dalis:
  -- tęstinumo/baigtinė salyga -> Nurodo ar ciklas tęsis, ar užsibaigs/
  -- pradinis/darbinis kitamasis -> Kintamasis kuris privalo dalyvauti tęstinumo/baigties salygoje.
  -- žingsnis -> tai pradinio/darbinio kintamojo kitimas, jog jis įtakotų tęstinumo salygą, ir artėtų link baigtinės salygos.
*/

//       ↓  - pradinis/darbinis kintamasis - įvyksta tik vieną kartą.
//       ↓ 
//       ↓        ↓ - tęstinumo/baigtinė salygą - tikrinama kiekvieną kart, prieš vykdant ciklo vykdymo bloką
//       ↓        ↓                               Jeigu salyga - true, kodas kartojamas. Kuomet salyga false - ciklas nutraukiamas.
// console.log('--------------- FOR CIKLAS ------------------');
// for (let i = 0; i < 10; i++)
//                       ↑ - žingsnis - vykdomas kiekvieną kart, kuomet pabaigiamas vykdyti ciklo vykdymo blokas
{ // → → → → → → Ciklo vykdymo bloko pradžia/atidarymas → → → → → → |
  // console.log('i:', i); //                                          |
} // → → → → → → Ciklo vykdymo bloko pabaiga/uždarymas  → → → → → → |
// console.log('');
/*
  Iteracija - vienas ciklo vykdymo bloko įvykdymas;
  Iteratorius - kitamasis, kuris įtakoja ciklo salyga ir keičiasi su kiekviena iteracija.
  Iteruoti - vykdyti ciklo vykdymo bloką su vis kita reikšme. 

  Labai dažnai ciklas yra naudojamas atlikti veiksmus su masyvo elementais. Dažnas posakis yra:
  -- 'iteruoti per masyva' (iterate through array) - tai reiškia, atlikti veiksmus su kiekvienu masyvo elementu.
*/

// ---------------------------- while ciklas -----------------------------
// While ciklas yra naudojamas, kuomet sunku/neįmanoma nustatyti iteracijų skaičiaus
// Taip pat jis yra lankstensnis už for ciklą, nes žingsnis gali kisti ir prieš kodo bloko vykdymą
{
  // console.log('--------------- WHILE CIKLAS ------------------');
  // let i = 0; // ← Pradinio/darbinio kintamojo deklaravimas
  // while (i < 10) {
  //      ↑
  // tęstinumo/baigtinė salyga
  // i++;
  // console.log('i:', i);
  // i++; // ← - žingsnis
  // }
  // console.log('');
}

// -------------------- FOR CIKLAS ITERAVIMUI PER OBJEKTO SAVYBES --------------------
{
  const person1 = {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    age: 22
  }
  const person2 = {
    name: 'Stalas',
    surname: 'Komodauskas',
    age: 21
  }
  const person3 = {
    name: 'Janina',
    surname: 'Joninaitė',
    age: 42
  }
  const people = [person1, person2, person3];

  // Iteravimas per objektą:
  for (const personPropertyName in person1) {
    console.log(personPropertyName);
    console.log(person1[personPropertyName]);
    // 1 iteracija
    // console.log('name');
    // console.log(person1['name']); ⇨ 'Serbentautas' 
    // console.log(person1.name); ⇨ 'Serbentautas' 

    // 2 iteracija
    // console.log('surname');
    // console.log(person1.surname); ⇨ 'Bordiūras'

    // 3 iteracija
    // console.log('age');
    // console.log(person1.age); ⇨ 22
  }


  // Pavyzdys apjungiant su iteravimu per masyvą
  people.forEach(person => {
    let str = '';
    for (const galitePavadintiKaipNorite in person) {
      str += person[galitePavadintiKaipNorite] + ' ';
    }
    console.log(str);
  });

}


// ---------------------------- do while ciklas --------------------------
//  Do while ciklas, pirmą iteraciją atlika bet kokiu atveju
// Ir kartoja vykdomajį bloką tol, kol salyga yra teisinga.
// console.log('-------------- KAULIUIKŲ RIDENIMAS SU DO-WHILE ----------------');
// let points;
// do {
//   points = Math.floor(Math.random() * 11) + 2;
//   console.log(points);
// } while (points != 12);
// console.log('Pagaliau išridenai 12 :) Sveikinu!');
// console.log('');




// --------------------------  Pavyzdžiai --------------------------------

// function printArray(arr) {
//   let arrayStringRepresentation = '[';
//   for (let i = 0; i < arr.length; i++) {
//     arrayStringRepresentation += arr[i] + ', ';
//   }
//   arrayStringRepresentation = arrayStringRepresentation.slice(0, -2);
//   arrayStringRepresentation += ']';
//   console.log(arrayStringRepresentation);
// }

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// function mulArray(arr) {
//   let mul = 1;
//   for (let i = 0; i < arr.length; i++) {
//     mul *= arr[i];
//   }
//   return mul;
// }

// function avgArray(arr) {
//   return sumArray(arr) / arr.length;
// }
// console.log('-------------- Praktiniai pavyzdžiai su masyvais ----------------');
// let numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
// printArray(numbers);
// console.log('sum: ', sumArray(numbers));
// console.log('mul: ', mulArray(numbers));
// console.log('avg: ', avgArray(numbers));
// console.log('');

