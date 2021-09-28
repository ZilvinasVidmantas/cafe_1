class AuthenticationService {
  static storage = new LocalStorageService('auth');
  static loggedIn = false;
  static loggedInUser = null;
  /**
   * Funkcija, skirta autentifikacimui pagal paštą ir slaptažodį
   * 
   * @param {string} email 
   * @param {string} password 
   * 
   * @return {void | string} - authentication success or error message
   */
  static loginByEmailAndPassword(email, password) {

  }

  /**
   * Funkcija, skirta naujo vartotojo užregistravimui
   * 
   * @param {RegisterData} data - {email, password, repeatPassword} 
   */
  static register({ email, password }) {
    // Čia turėtume patikrinti, ar dar neegzituoja vartotojas tokiu paštu kaip {email}
    const user = { email, password };
    const id = AuthenticationService.storage.addItem(user, 'users');
    AuthenticationService.loggedIn = true;
    AuthenticationService.loggedInUser = {
      ...user,
      id: id
    };
  }
}

