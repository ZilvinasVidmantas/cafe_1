import database from '../database/index.js';
import { v4 as createId } from 'uuid';

export const login = (req, res) => {
  const { email, password } = req.body;
  const { users } = database.data;

  const foundUser = users.find(x => x.email === email);
  if (!foundUser) {
    // Nerastas Vartotojas
    res.status(404).json({
      message: 'Vartotojas su tokiu paštu nerastas'
    });
    return;
  }

  if (foundUser.password === password) {
    delete foundUser.password;
    // Viskas gerai
    res.status(200).json({
      user: foundUser,
      token: 'Kazkada busiu tikras tokenas'
    });
    return;
  }

  // Neteisingas slaptažodis
  res.status(400).json({
    message: 'Neteisingas slaptažodis'
  });
};

export const register = (req, res) => {
  const { email, name, surname, password, repeatPassword } = req.body;
  if (password !== repeatPassword) {
    res.status(400).json({
      message: 'Slaptažodžiai nesutampa'
    });
    return;
  }

  const userExists = database.data.users.find(x => x.email === email);

  if (userExists) {
    res.status(400).json({
      message: 'Vartotojas su tokiu paštu jau egzistuoja'
    });
    return;
  }

  const user = {
    id: createId(),
    email,
    name,
    surname,
    password,
    role: 'USER'
  };

  database.data.users.push(user);
  database.write();

  res.status(200).json({
    user,
    token: 'sdfhgiosdfhgosfdob9viunfgboifg65+641+65'
  });
}

export const checkEmail = (req, res) => {
  res.status(200).json({ message: 'Užaugęs būsiu pašto patikrinimas' });
}