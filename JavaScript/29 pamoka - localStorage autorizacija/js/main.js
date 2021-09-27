const registerFormValidationSchema = {
  email: value => /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(value) ? true : 'Neteisingas paštas',
  password: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/.test(value) ? true : 'Min 8 simboliai, nors viena didžioji ir nors vienas skaičius',
  repeatPassword: {
    validate: (val, val2) => val === val2 ? true : 'Slaptažodžiai nesutampa',
    fieldNames: ['password', 'repeatPassword']
  }
}

const registrationForm = new Form('#formRegister', registerFormValidationSchema, (data) => {
  console.group('Registracija sekminga');
  {
    console.log(data);
  }
  console.groupEnd();
});


/*
  Sukurti prisijungimo formą:
    1. Sukurti HTML
    2. Sukurti prisijungimo formos validacijos schema
    3. Sukurti prisijungimo formos <Form> klasės objektą
      3.1 pritaikyti HTML from id, su atitinkamu <Form> konstruktoriaus parametru
      3.2 perduoti validacijos schemą
      3.3 perduoti pavyzdinę funkciją, su sėkmingo prisijungimo imitacija

*/