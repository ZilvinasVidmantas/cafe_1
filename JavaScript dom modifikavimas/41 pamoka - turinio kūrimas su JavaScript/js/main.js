const cardContainer = document.querySelector('#card-container');

// 1. pagal duomenis sukurti koreteles
const carCards = carData.map(({ brand, model, desc, imgSrc, linkAddress }) => {
  return new Card({
    desc,
    imgSrc,
    title: brand + ' ' + model,
    href: linkAddress,
  })
});

// 2. įdėti korteles į stulpelius
const columns = carCards.map(card => {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
  col.appendChild(card.element);
  return col;
});

// 3. stulpelius įdėti į <cardContainer>
columns.forEach(col => cardContainer.appendChild(col));

// ---------------------------------------------------------------
/*
  1. Sukurti Gyvūnų duomenis  faile animalData.js
    8 įrašai su savybėmis:
      name: String,
      kind: String,
      about: String,
      imgSrc: String,
      link: String
*/

// 2. Sukurti Korteles pagal gyvūnų duomenis
const animalCards = animalData.map(({name, kind, about, imgSrc, link}) => new Card({
  imgSrc,
  desc: about,
  title: name + ' ' + kind,
  href: link,
}));

// 3. įdėti koreteles į stulpelius
const cols = animalCards.map(card => {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
  col.appendChild(card.element);
  return col;
});

// 4. Stulpelius įdėti į cardContainer
cols.forEach(col => cardContainer.appendChild(col));
