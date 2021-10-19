const rootContainer = document.querySelector('#root');

const carCards = carData.map(({ brand, model, desc, imgSrc, linkAddress }) => new Card({
  desc,
  imgSrc,
  title: brand + ' ' + model,
  href: linkAddress,
}));
const carCardContainer = new CardContainer(carCards);

const animalCards = animalData.map(({ name, kind, about, imgSrc, link }) => new Card({
  imgSrc,
  desc: about,
  title: name + ' ' + kind,
  href: link,
}));
const animalCardContainer = new CardContainer(animalCards);

const wordLimit = 55;
const table1 = new Table( {
  columns: ['Image', 'Brand', 'Model', 'Description', 'Link'],
  rows: carData.reduce((result, { brand, model, desc, imgSrc, linkAddress }) => {
    const descWords = desc.split(' ');
    const rowData = [
      `<img src="${imgSrc}" style="height: 80px; object-fit: cover;"/>`,
      brand,
      model,
      descWords.length > wordLimit ? descWords.slice(0, wordLimit).join(' ') + '...' : desc,
      `<a class="btn btn-primary" href="${linkAddress}" target="blank">More info</a>`
    ];
    result.push(rowData); 
    return result;
  }, [])
});

const table2 = new Table({
  columns: ['Vardas', 'Pavardė', 'Svoris (kg)', 'Ūgis (m)'],
  rows: [
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kepalas', 'Barbenis', '80', '1.80'],
    ['Ganatolijus', 'Barbenis', '80', '1.80'],
    ['Kreimeris', 'Barbenis', '80', '1.80'],
    ['Supačius', 'Barbenis', '80', '1.80'],
    ['Faurina', 'Barbenis', '80', '1.80'],
    ['Motelė', 'Barbenis', '80', '1.80'],
    ['Zaubra', 'Barbenis', '80', '1.80'],
    ['Čigonas', 'Barbenis', '80', '1.80'],
  ]
});

// rootContainer.appendChild(carCardContainer.element);
// rootContainer.appendChild(animalCardContainer.element);
rootContainer.appendChild(table1.element);
// rootContainer.appendChild(table2.element);


/*
  10 min pertrauka
  Pažymime MS Teams formoj, kad dar NEPADARĖME užduoties
  Suformuojame gyvūnų lentelę pagal <animalData> duomenis
  Pažymime MS Teams formoj, kad dar PADARĖME užduoties
*/