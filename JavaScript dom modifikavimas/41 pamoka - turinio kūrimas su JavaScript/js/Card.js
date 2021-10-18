class Card {
  constructor({ title, desc, imgSrc, href }) {
    // 1.1 priskirti gautus parametrus, kuriamam objektui
    this.title = title;
    this.desc = desc;
    this.imgSrc = imgSrc;
    this.href = href;
    // 1.2 suformuoti HTML struktūrą su esamais duomenimis
    this.element = document.createElement('div');
    this.element.className = 'card h-100';
    this.render();
  }

  render = () => {
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.setAttribute('src', this.imgSrc);
    this.element.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    this.element.appendChild(cardBody);

    const header = document.createElement('h5');
    header.className = 'card-title';
    header.innerHTML = this.title;
    cardBody.appendChild(header);

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerHTML = this.desc;
    cardBody.appendChild(cardText);

    const btnLink = document.createElement('a');
    btnLink.className = 'btn btn-primary';
    btnLink.innerHTML = 'More';
    btnLink.setAttribute('href', this.href);
    btnLink.setAttribute('target', 'blank');
    cardBody.appendChild(btnLink);
  }
}