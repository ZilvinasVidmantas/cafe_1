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

const table1 = new Table({
  columns: ['Image', 'Brand', 'Model', 'Description', 'Link'],
  rows: carData.reduce((result, { brand, model, desc, imgSrc, linkAddress }) => {
    const rowData = [
      `<img src="${imgSrc}"" style="height: 80px; object-fit: cover;"/>`,
      brand,
      model,
      desc.length > 20 ? desc.split(' ').slice(0, 20).join(' ') + '...' : desc,
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
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
    ['Kevinas', 'Barbenis', '80', '1.80'],
  ]
});

// rootContainer.appendChild(carCardContainer.element);
// rootContainer.appendChild(animalCardContainer.element);
rootContainer.appendChild(table1.element);
rootContainer.appendChild(table2.element);
