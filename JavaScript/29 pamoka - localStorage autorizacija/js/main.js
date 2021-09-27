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


const loginFormValidationSchema = {
  email: value => /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(value) ? true : 'Neteisingas paštas',
}

const loginForm = new Form('#formLogin', loginFormValidationSchema, (data) => {
  console.group('Prisijungimas Sėkmingas');
  {
    console.log(data);
  }
  console.groupEnd();
});
// 20:50
