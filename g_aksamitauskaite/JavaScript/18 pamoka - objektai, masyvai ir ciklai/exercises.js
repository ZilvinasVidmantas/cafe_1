const numbers = [0, 1, 2, 5, 6, 8, 9, 7, 5, 6]; // numbers.length -> 10
//               0  1  2  3  4  5  6  7  8  9
console.group('1. Parašykite ciklą, kuris atspausdintų, kiekvieną masyvo <numbers> elementą');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.groupEnd();
console.log();

console.group('2. Parašykite ciklą, kuris atspausdintų, kiekvieną masyvo <numbers> elementą iš kito galo');
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
console.groupEnd();
console.log();

console.group('3. Parašykite ciklą, kuris atspausdintų, kas antrą masyvo <numbers> elementą pradedant pirmu');
for (let i = 0; i < numbers.length; i += 2) {
  console.log(numbers[i]);
}
console.groupEnd();
console.log();

console.group('4. Parašykite ciklą, kuris atspausdintų, kas antrą masyvo <numbers> elementą pradedant antru');
for (let i = 1; i < numbers.length; i += 2) {
  console.log(numbers[i]);
}
console.groupEnd();
console.log();

console.group('5. Parašykite ciklą, kuris atspausdintų, kas antrą masyvo <numbers> elementą pradedant pirmu iš kito galo');
for (let i = numbers.length - 1; i >= 0; i-=2) {
  console.log(numbers[i]);
}
console.groupEnd();
console.log();

console.group('6. Parašykite ciklą, kuris atspausdintų, kas antrą masyvo <numbers> elementą pradedant antru iš kito galo');
for (let i = numbers.length - 2; i >= 0; i-=2) {
  console.log(numbers[i]);
}
console.groupEnd();
console.log();
