class StarComponent {
  constructor(props) {
    this.props = props ?? {};
    this.htmlElement = document.createElement('div');
    this.render();
  }

  get count() {
    return Object.values(this.props).reduce((s, x) => s + x);
  }

  get average() {
    const ratingSum = Object.entries(this.props).reduce((s, [rating, count]) => s + Number(rating) * Number(count), 0)
    return Math.round(10 * ratingSum / this.count) / 10;
  }

  renderStars = () => {
    const average = this.average;
    const starsStr = Object.keys(this.props)
      .map(x => Number(x))
      .reduce((str, starRating) => {
        const remainder = average - starRating;
        let starStr;
        if (remainder >= -0.25) starStr = '<i class="bi bi-star-fill"></i>';
        else if (remainder >= -0.75) starStr = '<i class="bi bi-star-half"></i>';
        else starStr = '<i class="bi bi-star"></i>';
        return str + starStr;
      }, '');
    this.htmlElement.innerHTML = starsStr;
  }

  render = () => {
    this.htmlElement.className = 'star-component';
    this.renderStars();
  }
}