class PersonCard {

  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('article');
    this.render();
  }

  render = () => {
    const { name, surname, title, email, mobile, linkedIn, imgSrc } = this.props;
    this.htmlElement.className = 'person-card';
    this.htmlElement.innerHTML = `
      <img class="person-card__image" src="./img/mantas.png" alt="Mantas Kačerauskas image" />
      <h2 class="h1 text-success mt-5">Mantas Kačerauskas</h2>
      <div class="h3 text-secondary my-3 fw-300">Direktorius</div>
      <div class="my-3">
        <strong>
          <a href="mailto:mantas@prodivi.lt" class=" h4 text-black text-decoration-none">mantas@prodivi.lt</a>
        </strong>
      </div>
      <div class="my-3">
        <a href="tel:+37067289865" class="h5 text-black fw-300 text-decoration-none">+370 672 89865</a>
      </div>
      <div class="mt-5">
        <i class="h1 bi bi-linkedin text-primary"></i>
      </div>`;
  }
}