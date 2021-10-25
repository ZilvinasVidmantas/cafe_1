class PriceComponent {
  static splitPrice = (val) => {
    let whole = Math.floor(val);
    const remainderString = String(val - whole);
    let remainder;
    switch (remainderString.length) {
      case 1: remainder = '00'; break;
      case 3: remainder = remainderString[2] + '0'; break;
      default:
        remainder = Math.round(`${remainderString.slice(2, 4)}.${remainderString.slice(4)}`);
        if (remainder === 100) {
          remainder = '00';
          whole++;
        }
        break;
    }
    return { whole: String(whole), remainder: String(remainder) };
  }

  constructor(props) {
    this.props = props ?? {};
    this.htmlElement = document.createElement('span');
    this.render();
  }

  render = () => {
    const { currency, value, min, max } = this.props;
    if (value) {
      const { whole, remainder } = PriceComponent.splitPrice(value);
      this.htmlElement.className = 'price-component';
      this.htmlElement.innerHTML = `
        <span class="price-component__sign">${currency.sign}</span>
        <span class="price-component__whole">${whole}</span>
        <span class="price-component__remainder">${remainder}</span>
      `;
    } else {
      const prices = [min, max].map(value => {
        const { whole, remainder } = PriceComponent.splitPrice(value);
        return `
        <span class="price-component">
          <span class="price-component__sign">${currency.sign}</span>
          <span class="price-component__whole">${whole}</span>
          <span class="price-component__remainder">${remainder}</span>
        </span>`;
      });
      this.htmlElement.innerHTML = prices.join('<span> – </span>');
    }
  }
}