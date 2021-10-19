const rootContainer = document.querySelector('#root');

// --------------------------------------- Kortelių kūrimas -----------------------------------------------
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

// ---------------------------------------- Lentelių kūrimas ------------------------------------------------
const wordLimit = 55;
const carTable = new Table( {
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

const animalTable = new Table({
  columns: ['Image', 'Name', 'Kind', 'About', 'Link'],
  rows: animalData.reduce((result, { name, kind, about, imgSrc, link}) => {
    const rowData = [
      `<img src="${imgSrc}" style="height: 80px; width: 80px; object-fit: cover;"/>`,
      name,
      kind,
      about,
      `<a class="btn btn-primary" href="${link}" target="blank">More info</a>`
    ];
    result.push(rowData); 
    return result;
  }, [])
});

// -------------------------------- Komponentų įdėjimas į DOM'e esantį elementą -------------------------------------
// rootContainer.appendChild(carCardContainer.element);
// rootContainer.appendChild(animalCardContainer.element);
// rootContainer.appendChild(carTable.element);
rootContainer.appendChild(animalTable.element);

