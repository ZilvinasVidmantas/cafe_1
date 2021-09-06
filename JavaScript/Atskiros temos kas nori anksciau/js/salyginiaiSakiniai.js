// Salyginiai sakiniai - tai kodo vykdymas priklausomai nuo salygos.
// Jeigu salyga yra teisinga(true), yra vykdomas kodo blokas, jei salyga yra neteisinga(false)
// gali būti vykdomas 'else' kodo blokas.

// if-else panaudojimas 
{
  // let nationalityDatingToleranceData = [
  //   { nationality: 'American', tolerance: 0.12 },
  //   { nationality: 'Polish', tolerance: 0.22 },
  //   { nationality: 'British', tolerance: 0.19 },
  //   { nationality: 'Italian', tolerance: 0.15 }
  // ];

  // function determineCompatability(p1, p2) {
  //   if (p1.sex === p2.sex) return false;
  //   if (p1.sex === 'woman') return canYouDateConservative(p1, p2);
  //   else return canYouDateConservative(p2, p1);
  // }

  // function canYouDateConservative(woman, man) {
  //   let tolerance = nationalityDatingToleranceData.find(el => el.nationality === woman.nationality).tolerance;
  //   let womanLowerBound = woman.age / (1 + tolerance);
  //   let womanHigherBound = woman.age / (1 - tolerance);

  //   tolerance = nationalityDatingToleranceData.find(el => el.nationality === man.nationality).tolerance;
  //   let manLowerBound = man.age * (1 - tolerance);
  //   let manHigherBound = man.age * (1 + tolerance);

  //   return man.age >= womanLowerBound && man.age <= womanHigherBound // Ar vyras yra toleruotinas
  //     && woman.age >= manLowerBound && woman.age <= manHigherBound; // Ar moteris yra toleruotina
  // }
  // let person1 = {
  //   name: 'Janice',
  //   age: 24,
  //   sex: 'woman',
  //   nationality: 'American'
  // };
  // let person2 = {
  //   name: 'Alison',
  //   age: 23,
  //   sex: 'woman',
  //   nationality: 'Polish'
  // };
  // let person3 = {
  //   name: 'James',
  //   age: 28,
  //   sex: 'man',
  //   nationality: 'British'
  // };
  // let person4 = {
  //   name: 'Antonio',
  //   age: 30,
  //   sex: 'man',
  //   nationality: 'Italian'
  // };

  // determineCompatability(person2, person3);

  // if (canYouDateConservative(person1, person2)) {
  //   console.log('Tu ateik į pasimatymą, Kai skliaute išblės žara.');
  // } else {
  //   console.log('Jaučiu didelį ryšį su Dievu, svarstau apie vienuolyną.');
  // }
}

// Tęstiniai if-else-if sakiniai.
{
  // const
  //   arLija = false,
  //   arYraMaistoProduktu = false,
  //   arYraPinigu = true;

  // if (arLija) {
  //   console.log({ arLija, arYraMaistoProduktu, arYraPinigu });
  //   console.log('Žaisti stalo žaidimus');
  // } else if (arYraMaistoProduktu) {
  //   console.log({ arLija, arYraMaistoProduktu, arYraPinigu });
  //   console.log('Eiti į parduotuvę');
  // } else if (arYraPinigu) {
  //   console.log({ arLija, arYraMaistoProduktu, arYraPinigu });
  //   console.log('Užsisakyti maisto į namus');
  // } else {
  //   console.log({ arLija, arYraMaistoProduktu, arYraPinigu });
  //   console.log('Mesti svorį');
  // }
}

// Tęstiniai switch sakiniai
{
  // const
  //   todayDate = new Date(),
  //   weekDayNumber = todayDate.getDay(),
  //   weekDayEn = 'Monday';
  // let weekDay;
  // switch (weekDayNumber) { // Tikrinamas Number kintamasis
  //   case 1: weekDay = 'Pirmadienis'; break;
  //   case 2: weekDay = 'Antradienis'; break;
  //   case 3: weekDay = 'Trečiadienis'; break;
  //   case 4: weekDay = 'Ketvirtadienis'; break;
  //   case 5: weekDay = 'Penktadienis'; break;
  //   case 6: weekDay = 'Šeštadienis'; break;
  //   case 7: weekDay = 'Sekmadienis'; break;
  //   default: console.error('Savaitės dienos gali būti tik nuo 1-7.');
  // }
  // switch (weekDayEn) { // Tikrinamas String kintamasis
  //   case 'Monday': weekDay = 'Pirmadienis'; break;
  //   case 'Tuesday': weekDay = 'Antradienis'; break;
  //   case 'Wednesday': weekDay = 'Trečiadienis'; break;
  //   case 'Thursday': weekDay = 'Ketvirtadienis'; break;
  //   case 'Friday': weekDay = 'Penktadienis'; break;
  //   case 'Saturday': weekDay = 'Šeštadienis'; break;
  //   case 'Sunday': weekDay = 'Sekmadienis'; break;
  //   default: console.error('Nerastas savaitės pavadinimo vertimas.');
  // }

  // console.log(`Šiandien yra ${weekDay} :)`);
}

//-- Salygų eiliškumas sudėtinėse salygose:
{

  /*
  salyga1 || salyga2 || ... || salygaN. Operatorius '||' tikrina salygas iš kairės į dešinę, jeigu nors viena salyga yra
  true - sekančios nėra tikrinamos.
  
  salyga1 && salyga2 && ... && salygaN. Operatorius '&&' tikrina salygas iš kairės į dešinę, jeigu nors viena salyga yra
  false - sekančios nėra tikrinamos. 

  SVARBU:
  Rašant sudėtines salygas, pirmiausia reikėtų rašyti tas salygas,
  kurios turi didiausią tikimybę nutraukti kitų salygų tikrinimą.
  
  -- salygos:
  ---- a - Turit pinigų ( labiausiai tikėtina )
  ---- b - Gyvenat užmiesti ( vidutiniškai tikėtina )
  ---- c - per paskutinius metus nebuvo krizes (mažiausiai tikėtina)
  
  Pirksit mašiną, jeigu visos salygos teisingos:
  if( c && b && a){...}
  
  Pirksit mašiną, jeigu nors viena salyga yra true:
  if( a || b || c)
  
  Pirksit mašiną, jeigu nėra krizės ir turit pinigų, arba gyvent užmiestį
  if(c && a || b)
    c * a + b
  
  Pirksit mašiną, jeigu nėra krizės ir, arba turit pinigų arba gyvent užmiestį
  if(c && (a || b))
    c * (a + b)
  */
}

// Ternary operatorius:
{
  /*
    Ternary operatorius, arba 'inline if' tai būdas aprašyti salyginį sakinį vienoje eilutėje. Jis naudojamas, kuomet
    priskiriame reikšmę, ją spausdiname, ar viduje if salyginio sakinio norime atlikti nedidelį komandų kiekį.
    Taip pat ternary operatorius leidžia išlaikyti 'const' kintamojo apribojimą, priskiriant reikšmę pagal salygą.
  */
  const
    currentAge = 18,
    requiredAge = 20;
  sex = 'male';
  { // Logika su standartiniu if
    let message;
    if (currentAge >= requiredAge) {
      if (sex === 'male') message = 'Sveikas jaunuoli, atvykęs į Super duper klubą';
      else message = 'Sveika jaunuole, atvykusi į Super duper klubą';
    } else {
      if (sex === 'male') message = 'Nepyk jaunuoli, bet sūrelių fabrikas kitoje pusėje';
      else message = 'Nepyk jaunuole, bet sūrelių fabrikas kitoje pusėje';
    }
    console.log(message);
  }
  { // Logika su ternary
    const message = currentAge >= requiredAge // If(currentAge >= requiredAge)
      // then if true
      ? sex === 'male' // If(sex === 'male')
        ? 'Sveikas jaunuoli, atvykęs į Super duper klubą' // then if true
        : 'Sveika jaunuole, atvykusi į Super duper klubą' // then if false
      // then if false
      : sex === 'male' // If(sex === 'male')
        ? 'Nepyk jaunuoli, bet sūrelių fabrikas kitoje pusėje' // then if true
        : 'Nepyk jaunuole, bet sūrelių fabrikas kitoje pusėje'; // then if false
    console.log(message);
  }

}
