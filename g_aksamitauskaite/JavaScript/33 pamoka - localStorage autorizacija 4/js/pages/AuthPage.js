class AuthPage{
  // public
  content;
  constructor(selector) {
    this.content = document.querySelector(selector);
  }

  showPage = () => {
    this.content.style.display = 'block';
  }

  hidePage = () => {
    this.content.style.display = 'none';
  }
}