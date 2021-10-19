class Apartment {
  constructor(props) {
    this.element = document.createElement('div');
    this.props = props;
    this.render();
  }
  
  render = () => {
    const { city, street, price, squarePrice, squares, decoration, imgSrc } = this.props;
    this.element.className = 'row g-2 px-2';
    this.element.innerHTML = `
    <div class="col-3">
      <img src="${imgSrc}" class="w-100" height="160" style="object-fit: cover;">
    </div>
    <div class="col-4 ps-3 d-flex flex-column justify-content-between">
      <h3 class="d-flex flex-column h6">
        <span>${city}</span>
        <span>${street}</span>
      </h3>
      <div>
        <strong class="h5 m-0">${price} €</strong>
        <span class="d-inline-block ms-4 text-secondary">${squarePrice} €/m<sup>2</sup></span>
      </div>
    </div>
    <div class="col">${squares}</div>
    <div class="col text">${decoration}</div>
    <div class="col text-center">
      <button class="btn btn-outline-danger">
        <span>Įsiminti</span>
        <i class="bi bi-suit-heart-fill"></i>
      </button>
    </div>`;
  }
}