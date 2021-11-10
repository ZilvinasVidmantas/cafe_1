const baseURL = 'http://localhost:3000';

class API {
  static fetchUsers = (successCallback, failureCallback) => {
    fetch(`${baseURL}/users`)
      .then(res => res.json())
      .then(successCallback)
      .catch(failureCallback)
  }

  static deleteUser = (id, successCallback, failureCallback) => {
    fetch(`${baseURL}/users/${id}`, { method: 'DELETE' })
      .then(res => res.ok ? successCallback() : failureCallback(res.statusText))
      .catch(failureCallback)
  }
}
