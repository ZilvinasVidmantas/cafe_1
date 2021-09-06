const numbers = [-1, 2, -5, -7, 58, -65, 58, 7, 48, 11, 8, 4, 16];
const cities = [
  {
    name: 'Vilnius',
    capital: true,
    people: 650000,
    country: 'Lithuania',
    avgSalary: 1600
  },
  {
    name: 'Klaipėda',
    capital: false,
    people: 200000,
    country: 'Lithuania',
    avgSalary: 1400
  },
  {
    name: 'Riga',
    capital: true,
    people: 750000,
    country: 'Latvia',
    avgSalary: 1700
  },
  {
    name: 'Hamburg',
    capital: false,
    people: 900000,
    country: 'Germany',
    avgSalary: 2800
  },
  {
    name: 'Kaunas',
    capital: false,
    people: 300000,
    country: 'Lithuania',
    avgSalary: 1500
  }
];

// Foreach
{
  // array.prototype.foreach metodas, parametru reikalauja funkcijos - NE JOS KVIETINIO
  // foreach metodas kviečia šią funkciją su kiekvienu masyvo elementu iš eilės.
  // Kuomet yra kviečiamas 'foreach' metodas jis į tą funkiją perduoda 3 parametrus:
  // Pirmu parametru yra siunčiamas einamasis elementas
  // Antru parametru yra siunčiamas elemento indeksas iteruojamame masyve
  // Trečiu parametru yra siunčiama nuorodą į iteruojamą masyvą

  function funkcijaKuriBusKvieciamaSuKiekvienuMasyvoElementu(
    einamasisElementas,
    einamojoElementoIndeksas,
    masyvoNuorodoPerKuriYraIteruojama
  ) {
    console.log({
      einamasisElementas,
      einamojoElementoIndeksas,
      masyvoNuorodoPerKuriYraIteruojama
    });
  }

  // numbers.forEach(funkcijaKuriBusKvieciamaSuKiekvienuMasyvoElementu);
  // console.log('-------------------------------------');
  // cities.forEach(funkcijaKuriBusKvieciamaSuKiekvienuMasyvoElementu);

  // ATSARGIAI - tik supratimui !!!!!!!
  class Masyvas {
    constructor(...args) {
      this.vidinisMasyvas = args;
    }

    forEach(callback) {
      for (let i = 0; i < this.vidinisMasyvas.length; i++) {
        callback(this.vidinisMasyvas[i], i, this.vidinisMasyvas);
      }
    }
  }

  const manoMasyvas = new Masyvas(1, 2, 4, 9, 9, 9, 8); // [1, 2, 4, 9, 9, 9, 8]
  // manoMasyvas.forEach((el) => console.log({ el }))
  // ATSARGIAI - tik supratimui !!!!!!!

  // 4 būdai kaip perduoti funkciją:
  // anonimine lambda išraiška - Done
  //   numbers.forEach(el => console.log(el));
  //   // anksčiau aprašyta lambda išraiška - Done
  //   const printArrElLambda = el => console.log(el);
  //   numbers.forEach(printArrElLambda);
  //   // anonimine funkcija - Done
  //   numbers.forEach(function (el) {
  //     console.log(el)
  //   })
  //   // anksčiau aprašyta funkcija - Done
  //   function printArrElFunction(el) {
  //     console.log(el)
  //   }
  //   numbers.forEach(printArrElFunction);
}

// Map
{
  // array.prototype.map metodas, parametru reikalauja funkcijos - NE JOS KVIETINIO.
  // 'map' metodas kviečia šią funkciją su kiekvienu masyvo elementu iš eilės, ir tos funkcijos
  // grąžinamą rezultatą deda į naują masyvą. 'map' metodo paskirtis yra sukurti naują masyvą
  // pakeičiant kiekvieną elementą taip, kaip aprašo parametru perduota funkcija.
  // Įvykdžius parametru paduotą funkciją su visais elementais, array.map metodas
  // grąžina naują masyvą, kuriame yra parametru paduotos funkcijos rezultatai.
  // Kuomet yra kviečiamas 'map' metodas jis į tą funkiją perduoda 3 parametrus:
  // Pirmu parametru yra siunčiamas einamasis elementas
  // Antru parametru yra siunčiamas elemento indeksas iteruojamame masyve
  // Trečiu parametru yra siunčiama nuorodą į iteruojamą masyvą

  function double(el) {
    return el * 2;
  }

  function findMultiples(el) {
    const multiples = [];
    const result = {
      number: el
    };
    if (el < 0) {
      multiples.push(-1);
      el *= -1;
    }
    for (let i = 2; i <= el; i++) {
      while (el % i === 0) {
        el /= i;
        multiples.push(i);
      }
    }
    result.multiples = multiples;
    return result;
  }

  function cityIncomePerMonth(city) {
    return city.people * city.avgSalary;
  }

  const numbersDoubled = numbers.map(double);
  const numbersMultiples = numbers.map(findMultiples);
  const citiesMonthlyIncome = cities.map(cityIncomePerMonth);
  const citiesWithYearlyIncome = cities.map(city => {
    return {
      city: city.name,
      incomePerYear: city.people * city.avgSalary * 12
    }
  });
  const numberObjects = numbersMultiples.map(numberMultipleObject => {
    return {
      number: numberMultipleObject.number,
      primary: numberMultipleObject.multiples.length === 1 && numberMultipleObject.multiples[0] > 1
    }
  })
  // Naudodami map iteracini metoda ir masyvą 'numbersMultiples', sudarykite masyva,
  // kuriame butu objektai, su savybėmis:
  // {
  //   number: <skaičius, kuris yra tikrinamas>,
  //   primary: <true || false>
  // }
  // console.log(numbers);
  // console.log(numbersDoubled);
  // console.log(numbersMultiples);
  // console.log(citiesMonthlyIncome);
  // console.log(citiesWithYearlyIncome);
  // console.log(numberObjects);

  // ATSARGIAI - tik supratimui !!!!!!!
  class Masyvas {
    constructor(...args) {
      this.vidinisMasyvas = args;
    }

    map(callback) {
      const result = [];
      for (let i = 0; i < this.vidinisMasyvas.length; i++) {
        result.push(callback(this.vidinisMasyvas[i], i, this.vidinisMasyvas));
      }
      return result;
    }
  }

  const manoMasyvas = new Masyvas(1, 2, 4, 9, 9, 9, 8); // [1, 2, 4, 9, 9, 9, 8]
  const manoMasyvasDouble = manoMasyvas.map(el => el * 2);
  // console.log(manoMasyvasDouble);
  // ATSARGIAI - tik supratimui !!!!!!!
}

// Filter
{
  // array.prototype.filter metodas, parametru reikalauja funkcijos - NE JOS KVIETINIO.
  // 'filter' metodas kviečia šią funkciją su kiekvienu masyvo elementu iš eilės, 
  // ir formuoja naują masyvą. Jeigu parametru paduodama funkcija grąžina 'true',
  // einamasis elementas yra pridedamas į naujai formuojama masyvą, jeigu parametru perduodama
  // funkcija grąžina false, einamasis elementas atmetamas.
  // Kuomet yra kviečiamas 'map' metodas jis į tą funkiją perduoda 3 parametrus:
  // Pirmu parametru yra siunčiamas einamasis elementas
  // Antru parametru yra siunčiamas elemento indeksas iteruojamame masyve
  // Trečiu parametru yra siunčiama nuorodą į iteruojamą masyvą

   // ATSARGIAI - tik supratimui !!!!!!!
   class Masyvas {
    constructor(...args) {
      this.vidinisMasyvas = args;
    }

    filter(callback) {
      const result = [];
      for (let i = 0; i < this.vidinisMasyvas.length; i++) {
        if(callback(this.vidinisMasyvas[i], i, this.vidinisMasyvas))
          result.push(this.vidinisMasyvas[i]);
      }
      return result;
    }
  }

  const manoMasyvas = new Masyvas(1, 2, 4, 9, 9, 9, 8); // [1, 2, 4, 9, 9, 9, 8]
  const tikLyginiai = manoMasyvas.filter(el => el % 2 === 0);
  // console.log(tikLyginiai);
  // ATSARGIAI - tik supratimui !!!!!!!

  // 1. Naudodami array.filter metodą, parašykite funkciją ir atrinkite neigiamus skaičius
  // numbers masyve
  const numbersNegative = numbers.filter(num => num < 0);
  // 2. Atfiltruokite miestus, kurie turi daugiau nei 500 000 gyventojų
  const citiesLarge = cities.filter(city => city.people > 500000);
  // 3. Atfiltruokite miestus, kurie turi daugiau nei 500 000 gyventojų IR NĖRA sostinės
  const citiesLargeNotCapitals = cities.filter(city => city.people > 500000 && !city.capital);

  // console.log(numbersNegative);
  // console.log(citiesLarge);
  // console.log(citiesLargeNotCapitals);
}

// Reduce
{
  // Array.prototype.reduce metodas, parametru reikalauja:
  //  1 parametru - kaupiamosios funkcijos, NE JOS KVIETINIO. 
  //  Ši funkcija gali priimti nuo 2 iki 4 parametrų
  //      1 parametras (acc) - kaupiamoji reikšmė
  //      2 parametras (el) - masyvo einamasis elementas
  //      3 parametras (i) - masyvo einamojo elemento indeksas
  //      4 parametras (arr) - masyvo nuoroda per kurį yra iteruojama
  //  2 parametru - pradinė vertė
  // 'reduce' metodas kviečia šią funkciją su kiekvienu masyvo elementu iš eilės, 
  // ir pagal parametru perduota funkciją papildo reikšmę 'acc'. Praiteravus per visas
  // masyvo reikšme grąžina acc reikšmę.
  // Array.prototype.reduce paskirtis - sutraukti masyvo elementus į vieną reikšmę

  const suma = numbers.reduce((kaupiamojiReiksme, number) => kaupiamojiReiksme + number , 0);
  const suma2 = [5, 10, 15].reduce((acc, el) => acc + el, 0);

  console.log(suma);
  console.log(suma2);


} 
