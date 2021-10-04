/**
 * AuthenticationService klasė yra aprašyta statinėm funkcijos ir savybėmis,
 * nes tai yra programos dalis, kuris neturėtų kartotis. Statinės savybės/metodai
 * priklauso pačiai klasei-šablonui. 
 * 
 * Authentification - procesas kuriuo metu yra atpažįstamas klientas - tas kuris bando jungtis.
 * Šios klasės darbas yra skirtas tiktais tam, ir niekam kitam.
 * 
 * Kuriant didesnes sistemas yra labai svarbu kurti kodą atskirais perpanaudojamais moduliais,
 * tam kad galėtume vėliau juos perpanaudoti kitose aplikacijose, ar aplikacijos dalyse.
 * Šis principas yra vadinamas "Loose Coupling" arba "Decoupling"
 */
class AuthenticationService {
  static storage = new LocalStorageService('authentication');
  static loggedIn = false;
  /**
   * Funkcija, skirta autentifikacimui pagal paštą ir slaptažodį
   * 
   * @param {string} email 
   * @param {string} password 
   * 
   * @return {void | string} - authentication success or error message
   */
  static loginByEmailAndPassword({ email, password }) {
    const users = AuthenticationService.storage.getCollection('users');
    if (!users) return false;
    const foundMatch = users.find(({ data }) => data.email === email && data.password === password);
    if (!foundMatch) return false;
    const { password: x, ...user } = foundMatch.data;
    AuthorizationService.login(user);
  }

  static logout() {
    AuthorizationService.logout();
  }

  static checkEmailAvailability(email) {
    const users = AuthenticationService.storage.getCollection('users');
    if (!users) return true;
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
      !AuthenticationService.loggedIn
    ) {
      const user = {
        email,
        password,
        role: AuthorizationService.roles.standard
      };
      AuthorizationService.login({
        email: user.email,
        role: user.role
      })
      AuthenticationService.storage.addItem(user, 'users');
      AuthenticationService.loggedIn = true;
    }
  }
}
