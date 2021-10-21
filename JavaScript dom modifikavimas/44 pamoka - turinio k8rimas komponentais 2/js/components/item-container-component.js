class ItemContainerComponent {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('section');
    this.render();
  }

  renderItems = () => {
    const itemComponents = this.props.items.map(x => new ItemComponent(x));
    const htmlElements = itemComponents.map(x => x.htmlElement);
    this.htmlElement.append(...htmlElements);
  }

  render = () => {
    this.htmlElement.className = 'item-container-component';
    this.renderItems();
  }
}