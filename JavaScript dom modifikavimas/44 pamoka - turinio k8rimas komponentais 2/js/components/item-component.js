class ItemComponent{
  constructor(props){
    // this.props = props === undefined || props === null ? {} : props;
    this.props = props ?? {};
    this.htmlElement = document.createElement('article');
    this.render();
  }

  render = () => {
    const { imgSrc, desc } = this.props;
    this.htmlElement.className = 'item-component';
    this.htmlElement.innerHTML = `
    <div class="item-component__img-container">
      <img src="${imgSrc}" class="item-component__img" />
    </div>
    <p>${desc}</p>
    `;
  }
}