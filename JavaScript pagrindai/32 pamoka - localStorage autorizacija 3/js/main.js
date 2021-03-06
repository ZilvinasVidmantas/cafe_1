const registerFormValidationSchema = {
  email: value => /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(value)
    ? AuthenticationService.checkEmailAvailability(value)
      ? true
      : 'Šis el. paštas jau užimtas'
    : 'Neteisingas paštas',
  password: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/.test(value) ? true : 'Min 8 simboliai, nors viena didžioji ir nors vienas skaičius',
  repeatPassword: {
    validate: (val, val2) => val === val2 ? true : 'Slaptažodžiai nesutampa',
    fieldNames: ['password', 'repeatPassword']
  }
}
const registrationForm = new Form(
  '#formRegister',
  registerFormValidationSchema,
  AuthenticationService.register
);

const loginFormValidationSchema = {
  email: value => /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(value) ? true : 'Neteisingas paštas',
}
const loginForm = new Form(
  '#formLogin',
  loginFormValidationSchema,
  AuthenticationService.loginByEmailAndPassword
);

// ---------------------- Komponenetai apdorojami su JavaScript ------------------
const pageNavbar = new Navbar('#pageNavbar');


// ------------- Komponentai kurie turi reaguoti į Autorizacijos pasikeitimą --------------
AuthorizationService.addObserver(pageNavbar);
