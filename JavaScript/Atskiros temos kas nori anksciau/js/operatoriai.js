'use strict';
// Operatoriai
// -- Dviejų narių operatoriai
let x = 16;
let y = 4;
console.log('-- Dviejų narių operatoriai');
console.log('x:', x, 'y:', y);
let res = x + y; console.log('x + y:', res); // Sudėtis
res = x - y; console.log('x - y:', res); // Atimtis
res = x * y; console.log('x * y:', res); // Daugyba
res = x / y; console.log('x / y:', res); // Dalyba
res = x % y; console.log('x % y:', res); // Liekana
res = x ** y; console.log('x ** y:', res); // Laipsnis
res = x ** (1 / y); console.log('x ** (1 / y):', res); // Šaknis
console.log('----  ----  ----  ----  ----  ----  ----');

// -- Vieno nario operatoriai
let c = 5;
console.log('-- Vieno nario operatoriai');
console.log('c =', c);
console.log('c++', c++); // Įvykvyti komandą, tuomet padidinti vienetu
console.log('++c', ++c); // Padidinti vienetu, tuomet įvykdyti komandą
console.log('c--', c--); // Įvykdyti komandą, tuomet sumažinti vienetu
console.log('--c', --c); // Sumažinti vienetu, tuomet įvykdyti komandą
c += 2; console.log('c += 2; c:', c); // Prie esamos c kintamojo vertės pridėti 2 ir priskirti į tą patį kintamajį c;
c -= 2; console.log('c -= 2; c:', c); // Iš esamos c vertės atimti 2 ir priskirti į tą patį kintamajį c;
c *= 2; console.log('c *= 2; c:', c); // Esamą c vertę padauginti iš 2 ir priskirti į tą patį kintamajį c;
c /= 2; console.log('c /= 2; c:', c); // Esamą c vertę padalinti iš dviejų ir priskirti į tą patį kintamajį c;
c %= 2; console.log('c %= 2; c:', c); // Suskaičiuoti esamos c vertės liekaną iš 2 ir priskirti į tą patį kintamajį c;
console.log('----  ----  ----  ----  ----  ----  ----');

// -- Loginiai operatoriai
let lijoUzvakar = true;
let lijoVakar = false
let uzvakarTemp = '5';
let vakarTemp = 5;
let siandienTemp = 3;

console.log('-- Loginiai operatoriai');
console.log('---- Lygybės ir nelygybės')
console.log('lijoUzvakar:', lijoUzvakar, 'lijoVakar:', lijoVakar, 'užvakar:', uzvakarTemp, 'vakar:', vakarTemp, 'siandien:', siandienTemp);
console.log('užvakar > vakar', uzvakarTemp > vakarTemp); // Daugiau
console.log('užvakar >= vakar', uzvakarTemp >= vakarTemp); // Daugiau arba lygu
console.log('užvakar < vakar', uzvakarTemp < vakarTemp); // Mažiau
console.log('užvakar <= vakar', uzvakarTemp <= vakarTemp); // Mažiau arba lygu
console.log('užvakar == vakar', uzvakarTemp == vakarTemp); // Atlaidi lygybė, gali nesutapti duomenų tipas, bet turi sutapt reikšmė
console.log('užvakar === vakar', uzvakarTemp === vakarTemp); // Griežta lygybė, privalo sutapti ir duomenų tipas ir reikšmė.
console.log('lijoUzvakar', lijoUzvakar);
console.log('!lijoUzvakar', !lijoUzvakar); // Salygos inversija


console.log('---- Sudėtinės salygos');
console.log('------ And operatorius, loginė sandauga.');
console.log('true && true:', true && true);
console.log('true && false:', true && false);
console.log('false && true:', false && true);
console.log('false && false:', false && false);
console.log('------ OR operatorius, loginė sudėtis.');
console.log('true || true:', true || true);
console.log('true || false:', true || false);
console.log('false || true:', false || true);
console.log('false || false:', false || false);
