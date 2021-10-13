// [-1.]
// Schema
const schema = {
  email: value => /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(value) ? true : 'Neteisingas paštas',
  password: value => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ? true : 'Min 8 simboliai, nors viena didžioji ir nors vienas skaičius',
  repeatPassword: {
    validate: (val, val2) => val === val2 ? true : 'Slaptažodžiai nesutampa',
    fieldNames: ['password', 'repeatPassword']
  },
};

/* Validacijos procesas:
  0. Išvalyti praeito submit'o klaidas ir pranešimus
  1. Reaguoti į formos submit'inimą
  2. Suformuoti formos duomenis su atitinkančiais įvesties laukais
  3. Validavimas ir validavimo rezultato formavimas
  4. Validavimo rezultato panaudojimas
    4.1 -> duomenys geri -> siunčiame duomenis į serverį
    4.2 -> duomenys blogi -> išrašome klaidos pranešimus po atitinkamu įvesties lauku 
*/

// [0.]
/**
 * Ši funkciją kviečiame, kuomet reikia išvalyti klaidos pranešimus, kurie buvo atsiradę po praeito submit'o
 */
function clearRegisterFormErrors() {

}

// [1.]
/**
 *  Ši funkcija skirta apdoroti registracijos formą
 * 
 * @param {Event} event - informacija apie įvykį
 */
function handleRegisterForm(event) {
  event.preventDefault();
  // 2.
  const formData = structureRegisterFormData(formRegister);
  // 3. 
  const validationResult = validateRegisterFormData(schema, formData);
  console.log(validationResult);
  // [4.]
  if (true) {
    // 4.1
  } else {
    // 4.2
  }

}

// [2.]
/**
 * Suformuojami formos duomenys su atitinkančiu įvesties lauku pagal pavadinimą
 * 
 * @param {HTMLFormElement} form - forma, kuri buvo pa'submit'inta
 * 
 * @return { 
  *  fieldName1: { input: HTMLElement, value: string },
  *  fieldName2: { input: HTMLElement, value: string },
  *  ...,
  *  fieldNameN: { input: HTMLElement, value: string }
 *  } - FormData
 */
function structureRegisterFormData(form) {
  const formData = Array.from(form).filter(el => el.name);
  const result = {};

  formData.forEach(input => {
    result[input.name] = {
      input,
      value: input.value
    }
  });

  return result;
}

// [3.]
/**
 * 
 * @param {*} schema - validacijos schema
 * @param {*} formData - įvesties laukai su reikšmėmis ir pavadinimais
 * 
 * @return {
  *  fieldName1: string | true,
 *   fieldName2: string | true,
 *   ...,
 *   fieldNameN: string | true
 * }
 */
function validateRegisterFormData(schema, formData) {
  const result = {};
  for (const fieldName in schema) {
    const validator = schema[fieldName];
    const value = formData[fieldName].value;
    let fieldValidationResult;
    if (typeof validator === 'function') {
      fieldValidationResult = validator(value);
    } else {
      const args = validator.fieldNames.map(name => formData[name].value);
      fieldValidationResult = validator.validate(...args)
    }
    result[fieldName] = fieldValidationResult;
  }
  return result;
}

const formRegister = document.querySelector('#formRegister');
formRegister.addEventListener('submit', handleRegisterForm);