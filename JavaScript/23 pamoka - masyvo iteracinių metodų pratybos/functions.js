const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.groupCollapsed('1. Parašykite funkciją, kur grąžintų naują masyvą, kur kiekvienas elementas būtų dvigubai didesnis nei pradiniame masyve');
{
  console.log({
    numbers,
    numbersDoubled: numbers.map(a => a * 2)
  });
}
console.groupEnd();

console.groupCollapsed('2. Pakelti masyvo narius kvadratu');
{
  console.log({
    numbers,
    numbersSquared: numbers.map(a => a ** 2)
  });
}
console.groupEnd();

console.groupCollapsed('3. Padauginti masyvo narius iš jų index\'o (vietos masyve)');
{
  console.log({
    numbers,
    result: numbers.map((a, i) => a * i)
  });
}
console.groupEnd();

console.groupCollapsed('4. Atrinkti tiktai teigimų elementų masyvą');
{
  console.log({
    numbers,
    result: numbers.filter(a => a > 0)
  });
}
console.groupEnd();

console.groupCollapsed('5. Atrinkti tiktai neigiamų elementų masyvą');
{
  console.log({
    numbers,
    result: numbers.filter(a => a < 0)
  });
}
console.groupEnd();

console.groupCollapsed('6. Atrinkti tiktai lyginių skaičių masyvą');
{
  console.log({
    numbers,
    result: numbers.filter(a => a % 2 === 0)
  });
}
console.groupEnd();

console.groupCollapsed('7. Atrinkti tiktai nelyginių skaičių masyvą');
{
  console.log({
    numbers,
    result: numbers.filter(a => a % 2 === 1)
  });
}
console.groupEnd();

console.groupCollapsed("8. Visas neigiamas vertes masyve padaryti teigiamomis");
{
  console.log({
    numbers,
    result: numbers.map(Math.abs)
  });
}
console.groupEnd();

console.groupCollapsed('9. Pakelti visas masyvo reikšmes laipsniu \'index\'');
{
  console.log({
    numbers,
    result: numbers.map((x, i) => x ** i)
  });
}
console.groupEnd();

console.groupCollapsed('10. Atrinkti tik natūralių skaičių masyvą');
{
  console.log({
    numbers,
    result: numbers.filter(x => x % 1 === 0 && x > 0)
  });
}
console.groupEnd();

console.groupCollapsed('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių');
{
  console.log({
    numbers,
    result: numbers.map(Math.round)
  });
}
console.groupEnd();

console.groupCollapsed('12. Atrinkti kas antrą elementą');
{
  console.log({
    numbers,
    result: numbers.filter((_, i) => i % 2 === 0)
  });
}
console.groupEnd();

console.groupCollapsed('13. Atrinkti kas penktą elementą');
{
  console.log({
    numbers,
    result: numbers.filter((_, i) => i % 5 === 0)
  });
}
console.groupEnd();

console.groupCollapsed('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
{
  numbers.forEach((x, i) => console.log(`[${i}] => ${x}`));
}
console.groupEnd();

console.groupCollapsed('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
{
  console.log({
    numbers,
    sum: numbers.reduce((acc, el) => acc + el)
  });
}
console.groupEnd();

console.groupCollapsed('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
{
  console.log({
    numbers,
    avg: numbers.reduce((acc, el, _, arr) => acc + el / arr.length, 0)
  });
}
console.groupEnd();

// P.S. Math.max();
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
console.groupCollapsed('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
{
  const numbers = [1, 2, 3, 4, 5];
  console.log({
    numbers,
    max: Math.max(...numbers)
  });
}
console.groupEnd();

// P.S. Math.min();
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
console.groupCollapsed('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
{
  console.log({
    numbers,
    min: Math.min(...numbers)
  });
}
console.groupEnd();

// 21:13