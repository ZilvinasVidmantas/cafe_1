class Navbar {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.navigation = this.element.querySelector('.navbar-nav');
  }

  render = () => {
    // Logika, kuri atsakinga už Navbar komponento atvaizdavimą/perkūrimą
    if (AuthorizationService.loggedIn) {
      this.navigation.innerHTML = `
      <li class="nav-item">
        <div class="d-flex align-items-center h-100 text-muted m-0 h5">
          <span class="badge bg-secondary">${AuthorizationService.user.email}</span>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link js-logout-btn">Atsijungti</a>
      </li>`;
      const logoutBtn = this.navigation.querySelector('.js-logout-btn');
      logoutBtn.addEventListener('click', AuthenticationService.logout);
    } else {
      this.navigation.innerHTML = `
      <li class="nav-item">
        <a class="nav-link" href="#">Registruotis</a>
      </li>
      <li class="nav-item">
        <div class="d-flex align-items-center h-100 text-muted">|</div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Prisijungti</a>
      </li>`;
    }
  }
}