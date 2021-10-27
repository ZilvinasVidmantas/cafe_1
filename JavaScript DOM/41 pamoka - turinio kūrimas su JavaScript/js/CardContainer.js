class CardContainer {
  static wrapInColumn = card => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
    col.appendChild(card.element);
    return col;
  }

  constructor(data) {
    this.element = document.createElement('div');
    this.data = data;
    this.render();
  }
  
  render = () => {
    this.element.className = 'row g-3';
    const wrapedCards = this.data.map(CardContainer.wrapInColumn);
    this.element.append(...wrapedCards);
  }
}