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
    this.????(columnName => {
      // 2. su kiekvienu stulpelio pavadinimu, sukurti div
      const col = document.?????('div');
      // 3. įdėti stulpelio pavadinimą į sukurtą div [2.]
      col.????? = columnName;
      // 4. uždėti juodą foną
      col.style.backgro??? = '#000';
      // 5. uždėti baltas raides
      col.style.???? = '#000';
      // 6. uždėti paddingo 1rem
      col.style.???? = '1rem';
      // 7. prijungti prie this.element
      this.element.?????(col);
    });
    console.log(this.element.outerHTML)
  }

  render = () => {
    this.renderHeader();
    this.renderData();
  }
}
