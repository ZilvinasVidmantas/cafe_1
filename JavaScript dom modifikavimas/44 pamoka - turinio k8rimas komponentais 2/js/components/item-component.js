class ItemComponent{
  constructor(props){
    // this.props = props === undefined || props === null ? {} : props;
    this.props = props ?? {};
    this.htmlElement = document.createElement('article');
    this.render();
  }

  render = () => {
    const { imgSrc, desc, price } = this.props;
    this.htmlElement.className = 'item-component';
    const shortDesc = cutText(desc, 75);
    this.htmlElement.innerHTML = `
    <div class="item-component__img-container">
    <img src="${imgSrc}" class="item-component__img" />
    </div>
    <p>${shortDesc}</p>`;
    if(price){
      this.htmlElement.innerHTML += new PriceComponent(price).htmlElement.outerHTML;
    } 
      
  }
}