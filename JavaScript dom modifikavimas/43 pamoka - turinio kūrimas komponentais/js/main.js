const rootContainer = document.querySelector('#root');
// 1. Sukurkite kortelės komponentą <PersonCard> vienam žmogui: 'task-1.png';
const personData = {
  name: 'Mantas',
  surname: 'Kačerauskas',
  title: 'Direktorius',
  email: 'mantas@prodivi.lt',
  mobile: '+370 672 89865',
  linkedIn: 'https://www.linkedin.com/in/mantas-ka%C4%8Derauskas-295648aa/',
  imgSrc: 'https://prodivi.lt/wp-content/uploads/2019/07/Mantas3.png'
}
const personCard1 = new PersonCard(personData);

rootContainer.appendChild(personCard1.htmlElement);
// 2. Sukurkite 3 koretelės komponentus, viens šalia kito per vidurį ekrano, su 50px tarpais.
//   Šių komponentų išdėstymui sukurkite komponentą <PeopleContainer>.

const peopleData = [
  /* Pasireikškite*/
];
/* Pasireikškite*/


// 3. Sukurti komponentus ItemCard ir ItemCardContainer. Sukurti tokį atvaizdavimą: 'task-2.png' 