class RatingPopperComponent {
  constructor(props) {
    this.props = props ?? {};
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { link, stars } = this.props;

    this.htmlElement.className = 'rating-popper-component';

    const starComponent = new StarComponent(stars);
    const count = starComponent.count;

    const starPopper = document.createElement('div');
    starPopper.className = 'rating-popper-component__star-popper';
    starPopper.appendChild(starComponent.htmlElement);
    this.htmlElement.appendChild(starPopper);

    const reviewLink = document.createElement('a');
    reviewLink.href = link;
    reviewLink.innerHTML = count;
    reviewLink.setAttribute('target', 'blank');
    this.htmlElement.appendChild(reviewLink);
  }
}