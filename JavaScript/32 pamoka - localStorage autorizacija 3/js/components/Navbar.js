class Navbar {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  render = () => {
    // Logika, kuri atsakinga už Navbar komponento atvaizdavimą/perkūrimą
    console.log('Gavau pranešimą, kad pasikeitė Autorizacijos reikalai');
  }
}