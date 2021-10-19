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
const carTable = new Table({
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
  rows: animalData.reduce((result, { name, kind, about, imgSrc, link }) => {
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
// ---------------------------------------- Nekilnojamo turto objektai -------------------------------------
// 1. Sukurti HTML turinį šiai užduočiai, kad būtų lengviau kurti turinį su JavaScript
// 2. Sukurti Nekilnojamo turto objekto komponentą Apartment
// 3. perdaryti vieną <apartmentData> obejktą, taip, kad jis tiktų sukurti <Apartment> komponentui ir prijungti jį į <rootContainer>
const decorationDictionaryEnLT = {
  full: 'Pilna',
  partial: 'Dalinė',
}

const apartment1 = new Apartment({
  city: apartmentData[0].city,
  street: apartmentData[0].street,
  price: apartmentData[0].price,
  squarePrice: (apartmentData[0].price / apartmentData[0].rooms.reduce((sum, x) => sum + x)).toFixed(),
  squares: apartmentData[0].rooms.reduce((sum, x) => sum + x),
  decoration: decorationDictionaryEnLT[apartmentData[0].decoration] + ' apdaila',
  imgSrc: 'https://unsplash.it/300/300'
});
// 4. Sukurti Masyvą <Apartment> objektų, pagal <apartmentData>
const apartmentComponents = apartmentData.map(({ city, street, price, rooms, decoration }) => new Apartment({
  city,
  street,
  price,
  squarePrice: (price / rooms.reduce((sum, x) => sum + x)).toFixed(),
  squares: rooms.reduce((sum, x) => sum + x),
  decoration: decorationDictionaryEnLT[decoration] + ' apdaila',
  imgSrc: 'https://unsplash.it/300/300'
}));

// 5. naudojant rootContainer.append(...apartmentData) atvaizduoti juos visus
// rootContainer.append(...apartmentComponents.map(x => x.element));

/*
   6. Sukurti komponentą <ApartmentList> kuris atvaizduotų visus apartmentData ir papildomai viršuje turėtų antraštę, kurioje:
    Būtų išvardintos stulpelių prasmės
    Būtų parodytas visas kiekis elementų (9)
    Būtų dropDown, su rikiavimo pasirinkimu
*/
const apartmentlist = new ApartmentList({
  apartmentData: apartmentData.map(({ city, street, price, rooms, decoration }) => ({
    city,
    street,
    price,
    squarePrice: (price / rooms.reduce((sum, x) => sum + x)).toFixed(),
    squares: rooms.reduce((sum, x) => sum + x),
    decoration: decorationDictionaryEnLT[decoration] + ' apdaila',
    imgSrc: 'https://unsplash.it/300/300'
  }))
});

rootContainer.appendChild(apartmentlist.element);


// -------------------------------- Komponentų įdėjimas į DOM'e esantį elementą -------------------------------------
// rootContainer.appendChild(carCardContainer.element);
// rootContainer.appendChild(animalCardContainer.element);
// rootContainer.appendChild(carTable.element);
// rootContainer.appendChild(animalTable.element);
