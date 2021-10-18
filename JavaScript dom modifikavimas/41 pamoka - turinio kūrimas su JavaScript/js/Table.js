class Table {
  static formColumnStyle = (columnCount) => {
    return [...Array(columnCount)].map(_ => 'auto').join(' ');
    let gridTemplateColumns = '';
    for (let i = 0; i < columnCount; i++) {
      gridTemplateColumns += 'auto ';
    }
    return gridTemplateColumns.slice(0, gridTemplateColumns.length);
  }

  constructor({ columns, rows }) {
    /*
      columns: ['col1', 'col2', ..., 'colN'];
      rows: [
        [data1, data2, ..., dataN],
        [data1, data2, ..., dataN],
        ...
        [data1, data2, ..., dataN],
      ]

      N - stulpelių skaičius
    */
    this.columns = columns;
    this.rows = rows;
    this.element = document.createElement('div');
    this.element.style.display = 'grid';
    this.element.style.gridTemplateColumns = Table.formColumnStyle(columns.length);
    this.render();
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
    console.log(this.element.outerHTML)
  }

  renderData = () => {
    // 1. Iteruoti per eilutes
    this.???.forEach(row => {
      // 2. Iteruoti per eilutes elementus
      this.???.forEach(colData => {
        // 3. Sukurti div
        const col = ????('div');  
        // 4. Uždėti padding 0.5rem
        col.????.padding = ???;
        // 5. Įdėti duomenis į sukurtą div
        col.???? = ????;
        // 6. Prijungti sukurtą div, prie this.element
        this.element.??????(col);
      });
    });
  }

  render = () => {
    this.renderHeader();
    this.renderData();
  }
}
