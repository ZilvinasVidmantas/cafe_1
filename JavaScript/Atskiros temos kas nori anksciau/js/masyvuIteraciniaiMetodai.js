/*
  Masyvas, tai tiesiog objektas, kuris sukonstruotas pagal gamyklinį JS prototipą 'Array'. Šis 'Array' prototipas,
  turi vidines funkcijas - metodus. Dalį iš metodų jau nagrinėjome:
    push - įdeda elementą į masyvo galą
    pop - išima elementą iš masyvo galo 
    shift - išima elementą iš masyvo priekio
    unshift - įdeda elementą į masyvo priekį
  Masyvas turi ir kitokio pabūdžio metodus - iteracinius metodus. Šie metodai reikalauja funkcijos,
  kuri bus iškviečiama su kiekvienu elementu. Priklausomai nuo masyvo iteracinio metodo, toji funkcija turi atitikti 
  reikalavimus, kurių dėka bus įgalinta iteracinio metodo esmė.

*/

const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];

// Array.prototype.forEach
{
  /*
    forEach yra paprasčiausias 'Array' iteracinis metodas. Jo tikslas, tiesiog įvykdytį parametru paduotą funkciją,
    su kiekvienu masyvo elementu. Šiuo atveju, funkcija neturi nieko grąžinti, ji tiesiog įsivykdo. Kviečiant parama-
    metru perduotą funkciją su kiekvienu masyvo elementu, tai funkcijai yra siunčiami 3 parametrai, tokia tvarka:
      1. einamasis masyvo elementas,
      2. einamojo masyvo elemento indeksas iteruojame masyve
      3. masyvas per kurį yra iteruojama
    Priklausomai nuo vykdomos logikos, perduodamoji funkcija gali pasiimti atitinkamą siunčiamų parametrų kiekį, naudojant
    argumentų aprašymą, ir gaunant reikšmes į juos. Argumentų pavadinimus galite rinktis laisvai, geriausia vadinti
    juos taip, jog jie sufleruotų perduodamų parametrų prasmę. 
    Svarbu pastebėti, jog siunčiamų parametrų eiliškumas niekada nesikeičia, ir jeigu, siunčiamos funkcijos logikoje reikia
    tik indekso (2.) reikšmės, vistiek turime priimti argumentu ir patį iteruojamą elementą (1.), nes indeksas visada bus
    prasiunčiamas antruoju parametru.
  */

  // let femaleCount = 0;
  // function printPersonFullName(person){
  //   console.log(person.name, person.surname);
  // }
  // function increaseAllPeopleCount(person){
  //   if(person.sex === 'female') femaleCount++;
  // }
  // function printSexIncome(el){
  //   console.log(el.sex, el.income)
  // }
  // function printAgeSex(vadinuKaipNoriu){
  //   console.log(vadinuKaipNoriu.sex, vadinuKaipNoriu.income);
  // }

  // people.forEach(printPersonFullName);
  // people.forEach(increaseAllPeopleCount);
  // people.forEach(printSexIncome);
  // people.forEach(printAgeSex);
}

// Array.prototype.map
{
  /*
    Array.prototype.map iteracinis metodas yra skirtas kurti naują masyvą, iš iteruojamo masyvo elementų. Iteruodamas per kiekvieną masyvo elementą,
    jis vykdo parametru perduotą funkciją, perduodant jai einamajį elementą, jo indeksą ir iteruojamajį masyvą. Tos funkcijos grąžintas rezultatas 
    dedamas į naują masyvą. Praiteravus per visus pradinio masyvo elementus iteracinis metodas 'map' grąžina suformuotą masyvą į iškvietimo vietą.
    
    Suformavus naują masyvą, jis visada turės tiek pat elementų kaip ir pradinis masyvas. Jis dažniausiai naudojamas pradinio masyvo reikšmėms:
      * redaguoti
      * papildyti
      * sumažinti
      * suformuoti su jomis kitas struktūras
    
    Kaip ir Array.prototype.forEach atveju, perduodamoji funkcija gali priimti 3 parametrus:
      1. einamasis elementas
      2. einamojo elemento indeksas
      3. iteruojamas masyvas
    Perduodamoji funkcija PRI-VA-LO grąžinti reikšmę, kuri bus dedama į naujai formuojamą masyvą.
  */
  function getIncome(person) {
    return person.income;
  }
  function getFullNames(person) {
    return person.name + ' ' + person.surname;
  }
  function formAnonymousPerson(person) {
    return {
      sex: person.sex,
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar
    };
  }
  function raiseIncome(person) {
    return {
      ...person, // išskleidžiamos visos person objekto savybės naujai formuojamame objekte, kuris bus grąžintas.
      income: 1.07 * person.income // Padidinamos įplaukos 7%
    }
  }

  const incomes = people.map(getIncome); // [1200, 1300, 0, 2400, 1200, 364];
  const fullnames = people.map(getFullNames);
  const anonymousPeople = people.map(formAnonymousPerson);
  const wealthierPeople = people.map(raiseIncome);

  // console.table(people);
  // console.log(incomes);
  // console.log(fullnames);
  // console.table(anonymousPeople);
  // console.table(wealthierPeople);
}

// Array.prototype.filter
{
  /*
    Array.prototype.filter iteracinis metodas yra skirtas kurti naują masyvą, ATRENKANT REIKŠMES PAGAL SALYGĄ iš iteruojamų masyvo elementų.
    Iteruodamas per kiekvieną masyvo elementą, jis vykdo parametru perduotą funkciją, perduodant jai einamajį elementą, jo indeksą ir 
    iteruojamajį masyvą. Jeigu perduotos funkcijos grąžinimo reikšmė yra 'true', einamasis elementas įdedamas į naujai formuojamą masyvą.
    Priešingu atveju, jeigu parametru perduotos funkcijos grąžinimo rezultatas su einamuolu elementu yra false, tuomet einamasis elementas
    NĖRA įdedamas į naujai formuojamą masyvą.
    
    Kaip ir Array.prototype.forEach atveju, perduodamoji (tikrinimo) funkcija gali priimti 3 parametrus:
      1. einamasis elementas
      2. einamojo elemento indeksas
      3. iteruojamas masyvas
    Perduodamoji funkcija PRI-VA-LO grąžinti BOOLEAN, kur priklausomai nuo jos grąžinimo:
      * true - elementas bus pridedamas į naujai formuojamą masyvą.
      * false - elementas NEBUS pridedamas į naujai formuojamą masyvą.
  */
  function largerThan10(num) {
    return num > 10;
  }
  const smallerThen8 = function (num) {
    return num < 8
  }
  const isEven = (num) => {
    return num % 2 === 0;
  }
  const isOdd = num => num % 2 !== 0;

  const numbersLargerThan10 = numbers.filter(largerThan10);
  const numbersSmallerThen8 = numbers.filter(smallerThen8);
  const numbersEven = numbers.filter(isEven);
  const numbersOdd = numbers.filter(isOdd);
  const numbersPositive = numbers.filter(function (num) {
    return num > 0;
  })
  const numbersNegative = numbers.filter(n => n < 0);

  console.log(
    {
      numbersLargerThan10,
      numbersSmallerThen8,
      numbersEven,
      numbersOdd,
      numbersPositive,
      numbersNegative
    }
  )

}


// Array.prototype.reduce
{
  /*
  Array.prototype.reduce iteracinis metodas yra skirtas masyvo reikšmes sukaupti į vieną reikšmę.
  Iteruodamas per kiekvieną masyvo elementą, jis vykdo parametru perduotą funkciją, perduodant jai kaupiamajį kintamajį, einamajį elementą,
  jo indeksą ir iteruojamajį masyvą. Kaupiamojo kintamojo reikšmė yra tokia, kokią grąžina parametru perduodamoji funkcija.
  Antruoju parametru, galima perduoti pradinę kaupiamojo kintamojo reikšmę. Jeigu pradinė, kaupiamojo kintamojo reikšmė nėra perduota,
  ji lygi pirmajam masyvo elementui ir pradedama iteruoti nuo antrojo masyvo elemento.
  
  Perduodamosios funkcijos aprašas:
    1. kaupiamasis kintamasis
    2. einamasis elementas
    3. einamojo elemento indeksas
    4. iteruojamas masyvas
  Perduodamoji funkcija PRI-VA-LO grąžinti kaupiamojo kintamojo reikšmę.
*/
  const numbersSum = numbers.reduce((sum, el) => sum + el);
  // Veikimo pavyzdys
  {
    let sum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      const el = numbers[i];
      sum = sum + el;
    }
    const numbersSum = sum;
  }
  const numbersAvg = numbers.reduce((avg, el) => avg + el / numbers.length, 0);
  // Veikimo pavyzdys
  {
    let avg = 0;
    for (let i = 0; i < numbers.length; i++) {
      const el = numbers[i];
      avg =  avg + el / numbers.length
    }
    const numbersAvg = avg;
  }
  const numbersSumPositive = numbers.reduce((sum, el) => el > 0 ? sum + el : sum);
  const numbersSumNegative = numbers.reduce((sum, el) => el < 0 ? sum + el : sum);

  const peopleAgeAvg = people.reduce((avg, p) => avg + p.age / people.length, 0);
  const maleAgeAvg = people
    .filter(p => p.sex === 'male')
    .reduce((avg, p, i, arr) => avg + p.age / arr.length, 0);
    
  const femaleAgeAvg = people.filter(p => p.sex === 'female').reduce((avg, p, i, arr) => avg + p.age / arr.length, 0);

  console.log({
    numbersSum,
    numbersAvg,
    numbersSumPositive,
    numbersSumNegative,
    peopleAgeAvg,
    maleAgeAvg,
    femaleAgeAvg,
  })


}