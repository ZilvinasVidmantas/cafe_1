// 1.
class TableComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('table');
    this.render();
  }

  render = () => {
    this.htmlElement.className = 'table table-striped';
    this.htmlElement.innerHTML = `
      <thead class="bg-dark text-white">
        <tr>
          <th>Stulp1</th>
          <th>Stulp2</th>
          <th>Stulp3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data1</td>
          <td>data2</td>
          <td>data3</td>
        </tr>
        <tr>
          <td>data1</td>
          <td>data2</td>
          <td>data3</td>
        </tr>
        <tr>
          <td>data1</td>
          <td>data2</td>
          <td>data3</td>
        </tr>
      </tbody>
    `;
  }
}