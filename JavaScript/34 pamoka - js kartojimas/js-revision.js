const people = [
  {
    name: "Jovita",
    surname: "Lazdauskienė",
    age: 50,
    height: 160,
    weight: 97,
    sex: "female",
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    age: 23,
    height: 168,
    weight: 67,
    sex: "female",
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    age: 54,
    height: 190,
    weight: 78,
    sex: "male",
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    age: 45,
    height: 187,
    weight: 80,
    sex: "male",
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    age: 34,
    height: 157,
    weight: 56,
    sex: "female",
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    age: 55,
    height: 186,
    weight: 78,
    sex: "female",
  },
  {
    name: "Jolanta",
    surname: "Baksnaitė",
    age: 26,
    height: 149,
    weight: 57,
    sex: "female",
  },
  {
    name: "Jurgis",
    surname: "Dešinys",
    age: 35,
    height: 167,
    weight: 89,
    sex: "male",
  },
];
// BMI = mass(kg) / height(m)**2

console.group('1. Sukurti objektų(žmonių) masyvą su 8 elementais');
{
  console.table(people);
}
console.groupEnd();

console.group('2. Panaudojant Array.prototype.forEach:');
{
  console.group('Atspausdinti kiekvieną elementą');
  {
    people.forEach(p => console.log(p));
  }
  console.groupEnd();

  console.group('Atspausdinti kiekvieno elemento pilną vardą');
  {
    people.forEach(({ name, surname }) => console.log(`${name} ${surname}`));
  }
  console.groupEnd();

  console.group('Atspausdinti kiekvieno elemento kūno masės indeksą');
  {
    people.forEach(({ weight, height }) => console.log(weight / (height / 100) ** 2));
  }
  console.groupEnd();
}
console.groupEnd();

