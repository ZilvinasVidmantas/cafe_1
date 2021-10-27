class PersonCard {
  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('article');
    this.render();
  }

  render = () => {
    const { name, surname, title, email, mobile, linkedIn, imgSrc } = this.props;
    const fullname = name + ' ' + surname;
    this.htmlElement.className = 'person-card';
    this.htmlElement.innerHTML = `
      <img class="person-card__image" src="${imgSrc}" alt="${fullname} image" />
      <h2 class="h1 text-success mt-5">${fullname}</h2>
      <div class="h3 text-secondary my-3 fw-300">${title}</div>
      <div class="my-3">
        <strong>
          <a href="mailto:${email}" class=" h4 text-black text-decoration-none">${email}</a>
        </strong>
      </div>
      <div class="my-3">
        <a href="tel:+${mobile}" class="h5 text-black fw-300 text-decoration-none">${mobile}</a>
      </div>
      <div class="mt-5">
        <a href="${linkedIn}" class="text-decoration-none" target="blank">
          <i class="h1 bi bi-linkedin text-primary"></i>
        </a>
      </div>`;
  }
}