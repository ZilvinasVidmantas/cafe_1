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

    // const headersString = headers.reduce((res, text) => res + `<th>${text}</th>`, '');
    const headersString = headers.map(text => `<th>${text}</th>`).join('');

    // const rowsString = data.reduce((rows, rowData) =>
    //   rows + `<tr>
    //   ${rowData.reduce((res, text) => res + `<td>${text}</td>`, '')}
    //   </tr>`, ''
    // );
    const rowsString = data
      .map(rowData => `<tr>${rowData.map(text => `<td>${text}</td>`).join('')}</tr>`)
      .join('');

    this.htmlElement.className = 'table table-striped';
    this.htmlElement.innerHTML = `
      <thead class="bg-dark text-white">
        <tr>${headersString}</tr>
      </thead>
      <tbody>${rowsString}</tbody>
    `;
  }
}