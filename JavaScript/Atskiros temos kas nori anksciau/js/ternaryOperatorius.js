// Ternary operatorius
const age = 17;
let kaVeiksim;

if (age >= 18) {
  kaVeiksim = 'Einam i kina';
} else {
  kaVeiksim = 'Susitikim po ' + 18 - age + ' metų';
}
//          ↓ salyga ↓  ↓ jeigu true ↓        ↓↓↓↓↓↓ jeigu false ↓↓↓↓↓↓↓             
kaVeiksim = age >= 18 ? 'Einam i kina' : 'Susitikim po ' + 18 - age + ' metų';
// Else if alternatyva anudojant ternary operatorių;
kaVeiksim = salyga
  ? darykKazka
  : kitaSalygaElseAtveju
    ? darykElseIf
    : darykeElseIfElse
