// Local storage tai naršyklės atmintis, kurioje duomenys saugomi string pavidalu.
// duomenys yra pasiekiami raktais/pavadinimas
// Jeigu į localStorage bandoma įrašyti reikšmę, kuri nėra string tipo, tuomet tie duomenys yra
// paverčiami į string'ą JavaScript kalbos standartiniu būdu

// įrašymas į localStorage
                      // ↙ raktas/pavadinimas
localStorage.setItem('data', 777);
                          //   ↖ reikšmė
localStorage.setItem('people', [{name: 'Kėglis'},{ name: 'Jūračka'},{name: 'Samsonas'}]);

// Nauja sintakė išsaugot duomenims į localStorage
localStorage['authToken'] = '4fg6jh4ghj4gh654j65gh4';
localStorage.role = 'Moderator';

// Išsaugant objektus ir masyvus, duomenys verčiami string'u, prarandant vidines konteinerinių struktūrų savybes.
// Tam, kad būtų neprarandami duomenys, objektus ir masyvus reikėtų saugoti prieš tai pavertus į JSON formatą
const user = {
  email: 'banys@gmail.com',
  role: 'guest',
  intrests: ['Home', 'Kėgliai']
};
localStorage.setItem('user1', JSON.stringify(user))
localStorage['user2'] = JSON.stringify(user);
localStorage.user3 = JSON.stringify(user);

// Norint gauti duomenis;
const user1 = JSON.parse(localStorage.getItem('user1'));
const user2 = JSON.parse(localStorage['user2']);
const user3 = JSON.parse(localStorage.user3);

console.log({
  user1,
  user2,
  user3
})

