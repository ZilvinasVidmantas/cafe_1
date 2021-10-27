class ItemComponent {
  constructor(props) {
    this.props = props ?? {};
    this.htmlElement = document.createElement('article');
    this.render();
  }

  render = () => {
    const { imgSrc, desc, price, rating } = this.props;

    this.htmlElement.className = 'item-component';
    const shortDesc = cutText(desc, 75);
    this.htmlElement.innerHTML = `
    <div class="item-component__img-container">
      <img src="${imgSrc}" class="item-component__img" />
    </div>
    <p class="mb-0">${shortDesc}</p>`;
    if(rating){
      this.htmlElement.innerHTML += new RatingPopperComponent(rating).htmlElement.outerHTML;
    }
    if (price) {
      this.htmlElement.innerHTML += new PriceComponent(price).htmlElement.outerHTML;
    }
  }
}