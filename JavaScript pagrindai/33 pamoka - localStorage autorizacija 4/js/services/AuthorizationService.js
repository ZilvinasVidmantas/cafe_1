class AuthorizationService {
  static storage = new LocalStorageService('authorization');
  static _user = null;
  static observers = [];
  static roles = {
    standard: 'standard',
    admin: 'admin'
  }

  static login(user) {
    if (typeof user === 'object' && user.email && user.role) {
      AuthorizationService._user = user;
      AuthorizationService.notifyObservers();
      return;
    }
    throw TypeError('Prijungimo klaida. Kreipkitės į administratorių');
  }

  static logout() {
    AuthorizationService._user = null;
    AuthorizationService.notifyObservers();
  }

  static get loggedIn() {
    return Boolean(AuthorizationService._user)
  }

  static get user() {
    return { ...AuthorizationService._user };
  }

  static addObserver(component) {
    AuthorizationService.observers.push(component);
  }

  static notifyObservers(){
    AuthorizationService.observers.forEach(component => component.render());
  }
}

