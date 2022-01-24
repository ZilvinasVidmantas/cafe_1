import database from '../database/index.js';

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
  if (password !== password) {
    res.status(400).json({
      message: 'Slaptažodžiai nesutampa'
    });
    return;
  }

  /*
    įrašymo pvz.
  */
  database.data.users.push({ name: 'Klemensas' });
  database.write();

  /*
    1. Suformuoti Postman'e duomenis ir išsiųsti jog užklausa būtų aptarnauta šiu requestHandler'iu
      * email
      * name
      * surname
      * password
      * repeatPassword
    2. Ar vienodi Slaptažodiai?:
      * taip ->  Ar tarp esančių vartotojų jau yra toks vartotojo paštas koks gautas užklausos metu?
        * taip -> grąžinti klaidos pranešimą, kad toks vartotojas jau užsiregistravęs
        * ne -> 
          * Sukurti vartotoją su tokia struktūra:
            * id -> sugeneruooti
            * email
            * name
            * surname
            * password
            * role - USER
          * išsiųsti atsakymą su sukurtu vartotoju ir  dirbitnį token'ą
          
      * ne(nesutampa slaptažodžiai) -> Siųsti klaidos pranešimą, jog slaptažodžiai nesutampa

    iki 19: darbas savarankiškai
    iki 19:10 pertrauka
    19:10 - sufleriai | klausimai -> 19:20
    iki 19:35 užduoties pabaigimas
  */
  res.status(200).json({ message: 'Užaugus būsiu registracija' });
}

export const checkEmail = (req, res) => {
  res.status(200).json({ message: 'Užaugęs būsiu pašto patikrinimas' });
}