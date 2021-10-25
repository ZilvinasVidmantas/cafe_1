class ItemComponent {
  constructor(props) {
    this.props = props ?? {};
    this.htmlElement = document.createElement('article');
    this.render();
  }

  render = () => {
    /*
      Sukurti bestSeller badge'ą viršutiniam dešiniam kampem jeigu yra savybė <bestSeller>
      Užvedus, turi matytis tekstas 
        jeigu tekstas netelpa į eilutę turi būti nukirpas su CSS savybe text-overflow: elipsis
        https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
    */
    const { imgSrc, desc, price, rating, shipsToLithuania } = this.props;

    this.htmlElement.className = 'item-component';
    const shortDesc = cutText(desc, 75);
    this.htmlElement.innerHTML = `
    <div class="item-component__img-container">
      <img src="${imgSrc}" class="item-component__img" />
    </div>
    <p class="mb-0">${shortDesc}</p>`;
    if(rating){
      const popperComponent = new RatingPopperComponent(rating);
      this.htmlElement.appendChild(popperComponent.htmlElement);
    }
    if (price) {
      const priceComponent = new PriceComponent(price);
      this.htmlElement.appendChild(priceComponent.htmlElement);
    }
    if(shipsToLithuania){
      const shipmentElement = document.createElement('div');
      shipmentElement.className = 'item-component__shipment';
      shipmentElement.innerHTML = "Ships to Lithuania";
      this.htmlElement.appendChild(shipmentElement);
    }
  }
}