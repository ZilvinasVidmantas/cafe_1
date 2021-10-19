class ApartmentList {
  constructor(props) {
    this.element = document.createElement('article');
    this.props = props;
    this.apartments = props.apartmentData.map(x => new Apartment(x))
    this.render();
  }

  renderApartments = () => {
    this.apartments.forEach((apartment, i) => {
      this.element.appendChild(apartment.element);
      if (i < (this.apartments.length - 1))
        this.element.appendChild(document.createElement('hr'));
    });
  }

  render = () => {
    this.element.className = 'mb-5';
    this.element.innerHTML = `
    <div class="row g-2 p-2 bg-light shadow-sm">
      <div class="col-3">
        <select class="form-select">
          <option selected>Naujesni</option>
          <option>Senesni</option>
          <option>Brangeni</option>
          <option>Pigesni</option>
        </select>
      </div>
        <div class="col-4"></div>
        <div class="col">Plotas (m<sup>2</sup>)</div>
        <div class="col">Įrengimas</div>
        <div class="col"></div>
      </div>

      <div class="d-flex align-items-center py-2">
        <div class="me-2 flex-shrink-0">Skelbimai (18)</div>
        <hr class="w-100">
      </div>
    </div>`;
    this.renderApartments();
  }
}