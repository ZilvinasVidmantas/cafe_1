/*
  1. Sukurti lentelės komponentą faile <table-component.js>, su minimaliu atvaizdavmu (hard-code)
    - komponentui perduotas savybes saugoti <props>
    - komponento elementą saugoti savybėje - <htmlElement>
    - komponento atvaizdavimo logiką atlikti metode <render>

  2. Prijungti sukurto lentelės komponento-elementą prie egzistuojančio html kodo
    - įdėti komponento htmlElement į elementą su id="root"

  3. Įgalinti lentelės komponento stulpelių pavadinimų atvaizdavimą, pagal duomenis: ['Nuotrauka', 'Vartotojas', 'Paštas']
    - nepamiršti perduoti šiuo duomenų kuriant lentelės komponentą
    - letelės komponente saugoti šiuos duomenis <this.props.headers>

  4. Naudojant userDataArr suformuoti duomenis tinkamus atvaizduoti lentelės eilutėms
    - letelės komponente saugoti šiuos duomenis <this.props.data>
    - type RowData = Array<string>
    - type Data = Array<RowData>

  5. Lentelės komponento konstruktoriuje užtikrinkite, jog kiekvienos eilutės masyvo elementų kiekis būtų toks pats, kaip stulpelių kiekis
    - Jeigu salyga netenkinama, išmeskite klaidą
    - Jeigu salyga tankinama, nieko nedarykite

  6. Sukurkite papildomą stulpelį kiekvienoje eilytėje, ir į jį įdėkite raudoną mygtuką su '✕' ženklu ir geltoną mygtuką su '⟳' ženklu
    - taip pat priderinkite lentelės antraštę, jog nebūtų tuščio tarpo 

  7. Įgalinkite logiką, jog paspaudus ant mygtuko, konsolėje parašytų string'ą
    - kiekvienos eilutės trinimo mygtuko paspaudimas turi atspausdinti 'trinimas'
    - kiekvienos eilutės atnaujinimo mygtuko paspaudimas turi atspausdinti 'atnaujinimas'

  8. Struktūrizuokite kodą atskiromis funkcijomis
    - constructor: props priskyrimas, html elemnto priskyrimas, render iškvietimas
    - render: komponento vaizdo sudarymo veiksmų iškvietimas/vykdymas
    - createRows: Sukuria ir grąžina masyvą sudarytą iš eilučių 
    - createRow: Sukuria ir grąžina lentelės duomenų-eilutės elementą pagal Array<string> (RowData) duomenis
    - createHeader: Sukuria ir grąžina lentelės antraštės-eilutės elementą pagal this.props.headers
    - deleteRow: Atskausdina konsolėje 'trinimas' 
    - updateRow: Atskausdina konsolėje 'atnaujinimas' 

  9. Dokumentuotkite funkcijas
    - Aprašykite, ką daro kiekviena funkcija, kokius parametrus priima, ir ką grąžina
    - PALENGVINIMAS DOKUMENTUOJANT: Aprašius metodą, virš jos parašyti :
        '/**' + ENTER

  10. Virš klasės, aprašykite klasės objektui reikalingus duomenis
    type RowData = Array<string>

    type TableComponentProps = {
      headers: ... ,
      ...
    }
*/
// 2.
const rootElement = document.querySelector('#root');
const userTableComponent = new TableComponent({
  headers: ['Nuotrauka', 'Vartotojas', 'Paštas'],
  data: userDataArr.reduce((prevRowsArr, { imgSrc, username, email }) => [
    ...prevRowsArr,
    [`<img src="${imgSrc}" class="table__row-img"/>`, username, email]
  ], [])
});
rootElement.appendChild(userTableComponent.htmlElement);