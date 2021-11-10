const baseURL = 'http://localhost:3000';

const options = {
  headers: {
    'Content-Type': 'application/json'
  }
}

class API {
  static fetchUsers = (successCallback, failureCallback) => {
    fetch(`${baseURL}/users`, options)
      .then(res => res.json())
      .then(successCallback)
      .catch(failureCallback)
  }

  static deleteUser = (id, successCallback, failureCallback) => {
    fetch(`${baseURL}/users/${id}`, { ...options, method: 'DELETE' })
      .then(res => res.ok ? successCallback() : failureCallback(res.statusText))
      .catch(failureCallback)
  }

  static postUser = (user, successCallback, failureCallback) => {
    fetch(`${baseURL}/users`, { ...options, method: 'POST', body: JSON.stringify(user) })
      .then(res => res.ok ? successCallback() : failureCallback(res.statusText))
      .catch(failureCallback)
  }
}

/*
  ... 20:50 analizė
  pertrauka

  21:00 - update su API

*/