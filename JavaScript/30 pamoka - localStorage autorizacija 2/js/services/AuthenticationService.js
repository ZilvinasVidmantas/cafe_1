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

  static checkEmailAvailability(email) {
    const users = AuthenticationService.storage.getCollection('users');
    const emails = users.map(x => x.data.email);
    return !emails.includes(email);
  }

  /**
   * Funkcija, skirta naujo vartotojo užregistravimui
   * 
   * @param {RegisterData} data - {email, password, repeatPassword} 
   */
  static register({ email, password }) {
    if (
      AuthenticationService.checkEmailAvailability(email) &&
      !AuthenticationService.loggedIn &&
      loggedInUser === null
    ) {
      const user = { email, password };
      const id = AuthenticationService.storage.addItem(user, 'users');
      AuthenticationService.loggedIn = true;
      const loggedInUser = { ...user };
      delete loggedInUser.password;
      AuthenticationService.loggedInUser = {
        ...loggedInUser,
        id: id
      };
    }
  }
}
