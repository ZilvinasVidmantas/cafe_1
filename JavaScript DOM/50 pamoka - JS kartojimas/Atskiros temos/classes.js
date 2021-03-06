// Prototipo kūrimas naudojant 'class' raktažodį - ES5 'sintaksinis cukrus',
// jog prototipų kūrimas būtų panašesnis į programuotojams įprastą sintaksę

// Kintamieji, kurie yra priskiriami formuojamui objektui yra vadinami - savybėmis (properties)
// Vidinės funkcijos, kurios priskiriamos objektui, ar jo klasei yra vadinamos - metodais (methods)

// Objektai sukurti pagal klasės šabloną programavimo literatūroje yra vadinami 
//  * 'instance of a class', arba tiesiog 'instance'
//  * object (kitose programavimo kalbose, obejktais yra vadinama - išskirta(sukurta) atminties vieta pagal klasės šabloną)

// lietuviškai artimiausiai apibūdinantys 'instance of a class' žodžiai galėtų būti:
//  * pavyzdinis vientas
//  * klasės šablono realizacija
//  * atskiras/vienetinis atvejis
//  * objektas (naudojamas kitose programavimo kalbose) - tai ką grąžina klasės konstruktorius
{
  class Car {
    // Metodas skirtas objektui kurti
    // jis iškviečiamas kaskasrt, kai kuriame naują klasės objektą
    constructor(brand, model, year, color) {
      // Savybės ...
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.speed = 0;
    }

    // Metodai ....
    accelerate(amount) {
      this.speed += amount;
    }

    changeColor(color) {
      this.color = color;
    }

    displayColor() {
      console.log(this.color);
    }
  }
  const myCar = new Car('Peugeot', '406 Coupe', 1998, 'silver');
  const friendCar = new Car('Peogeot', '407', 2006, 'black');
  const uncleCar = new Car('BMW', '320d', 2006, 'black');
  const allCars = [myCar, friendCar, uncleCar];
  console.table(allCars);

  allCars.forEach(car => car.accelerate(20));
  myCar.displayColor();
  myCar.changeColor('red');
  friendCar.changeColor('blue');
  friendCar.changeColor('green');
  myCar.displayColor();

  console.table(allCars);
}

// Klasės savybių ir metodų rašymo tvarka
/*
class AXY {
  Statinės savybės
  Statiniai metodai
  privačios savybės
  viešos savybės // Dažniausiai nerašome

  konstruktorius

  metodai:
    set'eriai ir get'eriai
    objekto savybes keičiantys metodai
    savybes naudojantys metodai (dažniausiai spausdinimas)
}
*/

// ---------------------------------------------------------------- Setter and getter -------------------------------
/*
  Seteriai ir geteriai yra skirti supaprastinti objektų duomenų gavimo sitanksę.
  Kartais jie naudojami įgalinti validacijai, ar inkapsuliacijai.
  Viską, kas daroma su setteriais/getteriais gali atlikti ir metodų pagalba, tačiau setter'ių ir getter'ių sitaksė daug švaresnė
*/
class Person {
  #weight;

  constructor(name, surname, birthString) {
    this.name = name;
    this.surname = surname;
    this.birthday = new Date(birthString);
  }

  get age() {
    return new Date().getFullYear() - this.birthday.getFullYear();
  }

  set weight(val) {
    if( typeof val !== 'number') throw new TypeError('Weight must be number');
    
    this.#weight = val
  }

  get weight(){
    return this.#weight;
  }

}

const people = [
  new Person('Kerviguis', 'Kempūra', '1975-07-09'),
  new Person('Jorana', 'Voričienė', '1978-02-11'),
  new Person('Saulanė', 'Fakira', '2000-11-24')
];

// Getter'ių panaudojimas
people.forEach(p => console.log(p.name, p.surname, '-', p.age));


let xx = 77;
// Setter'ių panaudojimas
people.forEach(p => {
  p.weight = xx++;
});

console.table(people);

