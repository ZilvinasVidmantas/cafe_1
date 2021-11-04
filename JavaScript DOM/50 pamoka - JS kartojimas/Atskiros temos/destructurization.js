//  Objektų destruktūrizavimas
{
  const userSettings = {
    name: 'Bronius',
    surname: 'Kentauras',
    getFullname: () => `${this.name} ${this.surname}`
  }

  /* ...userSettings  =>  name: 'Bronius', 
                      =>  surname: 'Kentauras',
                      =>  getFullname: () => `${this.name} ${this.surname}` */

  //  Destrukturizavimas kopijuojant savybes.
  const allSettings = {
    ...userSettings,
    country: 'Lietuva',
    city: 'Alytus'
  }

  // Destruktūrizavimas ištraukiat reikšmes iš objekto į esamą aplinką (current scope)
  const { name, city } = allSettings;
  // reiškia tą patį kaip:
  {
    const name = allSettings.name;
    const city = allSettings.city;
  }

  // Galima destrukturizuojant keisti pavadinimus:
  const { name: vardas, city: miestas } = allSettings;
  // reiškia tą patį kaip:
  {
    const vardas = allSettings.name;
    const miestas = allSettings.city;
  }

  // Funkcija nedestrūkturizuojant
  {
    function printSettingsInfo(name, surname, country, city) {
      console.log(name, surname, country, city);
    }
    printSettingsInfo(allSettings.name, allSettings.surname, allSettings.country, allSettings.city);
  }
  // Funkcija destruktūrizuojant funkcijos vykdymo bloke
  {
    function printSettingsInfo(info) {
      let { name, surname, country, city } = info;
      console.log(name, surname, country, city);
    }
    printSettingsInfo(allSettings);
  }
  // Funkcija destruktūrizuojant parametrą, kuris turi būt objektas
  {
    function printSettingsInfo({ name, surname, country, city }) {
      console.log(name, surname, country, city);
    }
    printSettingsInfo(allSettings);
  }
}

// Masyvų destruktūrizavimas
const svoriai1 = [7, 10, 9];
const svoriai2 = [11, 5];
// ...[7, 10, 9]    =>    7, 10, 9
// ...svoriai2      =>    11, 5
const visiSvoriai = [...svoriai1, ...svoriai2];
visiSvoriai.sort((a, b) => a - b);

//          ↙ pirmas masyvo elementas - index -> 0
const [maziausias, antraPagalMazuma] = visiSvoriai;
//                          ↖ antras masyvo elementas - index -> 1
// Daro tą patį kaip:
{
  const maziausias = visiSvoriai[0];
  const antraPagalMazuma = visiSvoriai[1];
}
console.log(maziausias, antraPagalMazuma);


console.log('-------------------------');

const hobbies = ['fitbit', 'nike', 'sneakers', 'bicycle', 'sport', 'run'];

const people = [{
  events: ['fitbit presentation', 'Orange throwing party', 'Gaming party', 'Netflix', 'amazing bicycle run'],
  items: ['water', 'fitbit', 'bicycle'],
  locations: ['Vilnius', 'Klaipeda']
}, {
  events: ['Orange throwing party', 'Gaming party', 'Netflix'],
  items: ['Lego', 'Pan'],
  locations: ['Vilnius', 'Kaunas']
}, {
  events: ['fitbit presentation', 'Netflix', 'running with women'],
  items: ['fitbit'],
  locations: ['Šiauliai', 'Klaipeda']
}, {
  events: ['fitbit presentation', 'Orange throwing party', 'Gaming party', 'Netflix'],
  items: ['water', 'fitbit', 'bicycle', 'running shoes'],
  locations: ['Vilnius']
}, {
  events: ['fitbit presentation', 'Orange throwing party', 'Gaming party', 'Netflix'],
  locations: ['Klaipeda']
}];

function calcSportnessScore({ locations, ...infoArrays }) {
  let score = 0;
  Object.values(infoArrays).forEach(infoArray => {
    infoArray.forEach(word => {
      hobbies.forEach(hobby => {
        if (word.search(hobby) !== -1) {
          score++;
        }
      })
    })
  });
  return {
    score,
    locations
  }
}

const peopleSpornessDataByLocations = people
  .map(calcSportnessScore)
  .reduce((res, { score, locations }, i) => {
    console.group(i + 1);
    locations.forEach(location => {
      console.log({ location, res: { ...res } });
      if (!res.hasOwnProperty(location)) {
        res[location] = 0;
      }
      res[location] += score;
    })
    console.groupEnd();
    return res;
  }, {});
console.log(peopleSpornessDataByLocations)


// 20:50





