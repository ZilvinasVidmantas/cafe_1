class Table {
  /**
   * Lentelės konstravimas paga, stulpelių ir eilučių masyvus.
   * Lentelė veikia korektiškai, kuomet stulpelių kiekis yra vienodas visose eilutėse.
   * 
   * @param {Object} props - Objektas su dviem savybėm. 
   * @property {Array} props.columns  - stulpelių pavadinimų masyvas
   * @property {Array} props.rows  - duomenų eilučių masyvai masyve
   */
  constructor({ columns, rows }) {
    if (!rows.every(row => row.length === columns.length)) {
      throw TypeError('Stulpelių kiekis privalo būti lygus visose eilutėse.')
    }

    this.element = document.createElement('div');
    this.columns = columns;
    this.rows = rows;
    this.styleTable();
    this.render();
  }

  styleTable = () => {
    this.element.style.display = 'grid';
    this.element.style.margin = '1rem 0';
    this.element.style.boxShadow = '0 0 4px 1px #0003';
    this.element.style.width = '100%';
    this.element.style.gridTemplateColumns = this.columns.map(_ => 'auto').join(' ');
  }

  renderHeader = () => {
    // 1. iteruoti per savybę this.columns
    this.columns.forEach(columnName => {
      // 2. su kiekvienu stulpelio pavadinimu, sukurti div
      const col = document.createElement('div');
      // 3. įdėti stulpelio pavadinimą į sukurtą div [2.]
      col.innerHTML = columnName;
      // 4. uždėti juodą foną
      col.style.background = '#000';
      // 5. uždėti baltas raides
      col.style.color = '#fff';
      // 6. uždėti paddingo 1rem
      col.style.padding = '0.5rem';
      // 7. prijungti prie this.element
      this.element.appendChild(col);
    });
  }

  renderData = () => {
    // 1. Iteruoti per eilutes
    this.rows.forEach((row, i) => {
      // 1.1 kas antrai eilutei nustatyti fono spalvą
      const background = i % 2 === 0 ? '#0000' : '#0001';
      // 2. Iteruoti per eilutes elementus
      row.forEach(colData => {
        // 3. Sukurti div
        const col = document.createElement('div');
        // 4. Uždėti padding 0.5rem
        col.style.padding = '0.5rem';
        col.style.background = background;
        // 5. Įdėti duomenis į sukurtą div
        col.innerHTML = colData;
        // 6. Prijungti sukurtą div, prie this.element
        this.element.appendChild(col);
      });
    });
  }

  render = () => {
    this.renderHeader();
    this.renderData();
  }
}
