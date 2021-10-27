// 1.
class TableComponent {
  constructor(props) {
    if (props.data.some(rowData => rowData.length !== props.headers.length))
      throw new TypeError('Lentelės duomenys turi ne vienodą kiekį stulpelių');
    this.props = props;
    this.htmlElement = document.createElement('table');
    this.render();
  }

  render = () => {
    const { headers, data } = this.props;

    const headersString = headers.map(text => `<th>${text}</th>`).join('') + '<th></th>';

    const rows = data
      .map(rowData => {
        const row = document.createElement('tr');
        row.innerHTML = `
          ${rowData.map(text => `<td>${text}</td>`).join('')}
          <td>
            <button class="btn btn-danger">✕</button>
            <button class="btn btn-warning">⟳</button>
          </td>`;

        const btnDelete = row.querySelector('.btn-danger');
        btnDelete.addEventListener('click', () => console.log('trynimas'));

        const btnUpdate = row.querySelector('.btn-warning');
        btnUpdate.addEventListener('click', () => console.log('atnaujinimas'));

        return row;
      });

    this.htmlElement.className = 'table table-striped';
    this.htmlElement.innerHTML = `
      <thead class="bg-dark text-white">
        <tr>${headersString}</tr>
      </thead>
      <tbody></tbody>`;

    const tbody = this.htmlElement.querySelector('tbody');
    tbody.append(...rows);
  }
}