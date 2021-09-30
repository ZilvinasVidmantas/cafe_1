class AuthorizationService {
  static storage = new LocalStorageService('authorization');
  static _user = null;
  static roles = {
    standard: 'standard',
    admin: 'admin'
  }

  static login(user) {
    if (typeof user === 'object' && user.email && user.role) {
      AuthorizationService._user = user;
      return;
    }
    throw TypeError('Prijungimo klaida. Kreipkitės į administratorių');

  }

  static logout() {
    AuthorizationService._user = null;
  }

  static get loggedIn() {
    return Boolean(AuthorizationService._user)
  }

  static get user() {
    return { ...AuthorizationService._user };
  }
}

// 19:57
