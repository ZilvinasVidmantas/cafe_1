/*
type RowData = Array<string>

type TableComponentProps = {
  headers: RowData,
  data: Array<RowData>
}
*/
class TableComponent {
  /**
   * Sukuria naują TableComponent klasės objektą
   * 
   * @param {Object} props - komponentui perduodamos pradinės savybės 
   */
  constructor(props) {
    if (props.data.some(rowData => rowData.length !== props.headers.length))
      throw new TypeError('Lentelės duomenys turi ne vienodą kiekį stulpelių');
    this.props = props;
    this.htmlElement = document.createElement('table');
    this.render();
  }

  /**
   *  Ištrina elementą
   */
  deleteRow = () => console.log('trynimas');

  /**
   *  Atnaujina elementą
   */
  updateRow = () => console.log('atnaujinimas');

  /**
   * Sukuria vienos eilutės HTML elementą
   * 
   * @param {Object} rowData - vienos eilutės objektas
   * 
   * @returns {RowHTMLElement} - sukurta eilutė pagal duomenis
   */
  createRow = rowData => {
    const row = document.createElement('tr');
    row.innerHTML = `
    ${rowData.map(text => `<td>${text}</td>`).join('')}
    <td>
      <button class="btn btn-danger">✕</button>
      <button class="btn btn-warning">⟳</button>
    </td>`;

    const btnDelete = row.querySelector('.btn-danger');
    btnDelete.addEventListener('click', this.deleteRow);

    const btnUpdate = row.querySelector('.btn-warning');
    btnUpdate.addEventListener('click', this.updateRow);

    return row;
  }

  /**
   * Sukuria masyvą sudarytą iš eilutės elementų
   * 
   * @returns {Array} - masyvas sudarytas iš eilutės elementų
   */
  createRows = () => this.props.data.map(this.createRow);

  /**
   * Sukuria lentelės antraštę
   * 
   * @returns {String} - lentelės antraštės HTML turinys 
   */
  createHeaderString = () => this.props.headers.map(text => `<th>${text}</th>`).join('') + '<th></th>';

  /**
   * Sudaro komponento HTML turinį
   */
  render = () => {
    const headersString = this.createHeaderString();
    this.htmlElement.className = 'table table-striped';
    this.htmlElement.innerHTML = `
    <thead class="bg-dark text-white">
    <tr>${headersString}</tr>
    </thead>
    <tbody></tbody>`;

    const rows = this.createRows();
    const tbody = this.htmlElement.querySelector('tbody');
    tbody.append(...rows);
  }
}