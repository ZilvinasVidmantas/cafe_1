const baseURL = 'http://localhost:3000';

class API {
  static fetchUsers = (successCallback, failureCallback) => {
    fetch(`${baseURL}/users`)
      .then(res => res.json())
      .then(successCallback)
      .catch(failureCallback)
  }
}

