// ----------------------Užduotys--------------------------
// const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const numbers = [1, -2, 3, -4, 5, -6];

console.group('1. Padauginti masyvo narius iš 2');
console.log('---');
{
  function mulArrBy2(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
    }
    return result;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu');
console.log('---');
{
  function powerArrBy2(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const arrayValue = arr[i];
      result.push(arrayValue ** 2);
    }
    return result;
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve)');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * i);
    }
    return result;
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterPositives(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterNegatives(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterEquals(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterOdds(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis");
{
  function arrAbsoluteValues(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      //                   salyga     ? jeigu true  : jeigu false
      // let positiveValue = arr[i] <= 0 ? arr[i] * -1 : arr[i];
      result.push(Math.abs(arr[i]));
    }
    return result;
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\'');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: powArrElementsByIndex(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterNaturals(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių');
console.log('---');
{
  function absArrElements(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: absArrElements(numbers)
  // });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    //  Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterEverySecond(numbers)
  // });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    //  Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterEveryFifth(numbers)
  // });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`[${i}] => ${arr[i]}`);
    }
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    // Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: sumArr(numbers)
  // });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    // Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: avgArr(numbers)
  // });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    //  Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: arrMax(numbers)
  // });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    //  Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: arrMin(numbers)
  // });
}
console.log('---');
console.groupEnd();
