const numbers = [0, 1, 2, 5, 6, 8, 9, 7, 5, 6];

console.group('1. Parašykite ciklą, kuris atspausdintų, kiekvieną masyvo <numbers> elementą')
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.groupEnd();
console.log();

console.group('2. Parašykite ciklą, kuris atspausdintų, kiekvieną masyvo <numbers> elementą iš kito galo')
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
console.groupEnd();
console.log();

console.group('3. Parašykite ciklą, kuris atspausdintų, kas antrą masyvo <numbers> elementą pradedant pirmu');
// code ...
console.groupEnd();
console.log();

console.group('4. Parašykite ciklą, kuris atspausdintų, kas antrą masyvo <numbers> elementą pradedant antru');
// code ...
console.groupEnd();
console.log();

console.group('5. Parašykite ciklą, kuris atspausdintų, kas antrą masyvo <numbers> elementą pradedant pirmu iš kito galo');
// code ...
console.groupEnd();
console.log();

console.group('6. Parašykite ciklą, kuris atspausdintų, kas antrą masyvo <numbers> elementą pradedant antru iš kito galo');
// code ...
console.groupEnd();
console.log();
