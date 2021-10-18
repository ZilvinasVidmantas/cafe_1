class Table {
  static formColumnStyle = (columnCount) => {
    let gridTemplateColumns = '';
    for (let i = 0; i < columnCount; i++) {
      gridTemplateColumns += 'auto ';
    }
    return gridTemplateColumns.slice(0, gridTemplateColumns.length);
    return [...Array(columnCount).keys()].map(_ => 'auto').join(' ');
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
    this.createHeader();
  }

  createHeader = () => {
    /*
      1. iteruoti per savybę this.columns
      2. su kiekvienu stulpelio pavadinimu, sukurti div
      3. įdėti stulpeliu pavadinimą į sukurtą div [2.]
      4. uždėti juodą foną
      5. uždėti baltas raides
      6. uždėti paddingo 1rem
      7. prijungti prie this.element
    */

    console.log(this.element.outerHTML)
  }
}
