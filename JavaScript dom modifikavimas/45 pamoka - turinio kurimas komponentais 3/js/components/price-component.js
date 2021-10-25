class PriceComponent {
  static splitPrice = (val) => {
    let whole = Math.floor(val);
    const remainderString = String(val - whole);
    let cents;
    switch (remainderString.length) {
      case 1: cents = '00'; break;
      case 3: cents = remainderString[2] + '0'; break;
      default:
        cents = Math.round(`${remainderString.slice(2, 4)}.${remainderString.slice(4)}`);
        if (cents === 100) {
          cents = '00';
          whole++;
        }
        break;
    }
    return { whole: String(whole), cents: String(cents) };
  }

  constructor(props) {
    this.props = props ?? {};
    this.htmlElement = document.createElement('span');
    this.render();
  }

  render = () => {
    const { currency, value, min, max } = this.props;
    if (value) {
      const { whole, cents } = PriceComponent.splitPrice(value);
      this.htmlElement.className = 'price-component';
      this.htmlElement.innerHTML = `
        <span class="price-component__sign">${currency.sign}</span>
        <span class="price-component__whole">${whole}</span>
        <span class="price-component__remainder">${cents}</span>
      `;
    } else {
      const prices = [min, max].map(value => {
        const { whole, cents } = PriceComponent.splitPrice(value);
        return `
        <span class="price-component">
          <span class="price-component__sign">${currency.sign}</span>
          <span class="price-component__whole">${whole}</span>
          <span class="price-component__remainder">${cents}</span>
        </span>`;
      });
      
      this.htmlElement.innerHTML = prices.join('<span> – </span>');
    }
  }
}