class ItemComponent {
  constructor(props) {
    this.props = props ?? {};
    this.htmlElement = document.createElement('article');
    this.render();
  }

  render = () => {
    const { imgSrc, desc, price, rating, /* išsitraukti savybę */ } = this.props;

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
    /* logika, kuri papildo komponentą "Shipts to Lithuania" užrašu () pridėti stilius */
  }
}