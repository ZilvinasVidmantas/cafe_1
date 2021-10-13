class Form {
  constructor(selector, validationSchema, onSubmit) {
    const form = document.querySelector(selector);
    if (!form)
      throw new Error(`Nėra rastas elementas su tokiu selektoriumi: ${selector}`);
    if (!(form instanceof HTMLFormElement))
      throw new TypeError(`Kuriant Form klasės objektą, turite perduoti selektorių kuris pasirinkitų HTMLFormElement elementą`);
    if (typeof onSubmit !== 'function')
      throw new TypeError(`Kuriant <Form> objektą, 3 argumentas turi būti funkcija. Šiuo atveju perduota:\nreikšmė: ${onSubmit}\ntipas: ${typeof onSubmit}`);
    this.fields = Array
      .from(form)
      .filter(x => x.name)
      .reduce((result, field) => ({
        ...result,
        [field.name]: {
          field,
          errorContainer: field.parentElement.querySelector('.invalid-feedback')
        }
      }), {});
    if (!Object.keys(validationSchema).every(fieldName => Object.keys(this.fields).includes(fieldName)))
      throw new TypeError(`Validacijos schema nėra pritaikyta šiai formai`);
    this.validationSchema = validationSchema;
    this.onSubmit = onSubmit;
    form.addEventListener('submit', this.handleSubmit);
  }

  get values() {
    const result = {};
    for (const fieldName in this.fields) {
      result[fieldName] = this.fields[fieldName].field.value
    }
    return result;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.clearErrors();
    const isValid = this.validate();
    if (isValid) {
      this.onSubmit(this.values);
    } else {
      this.displayErrors();
    }
  }

  validate = () => {
    const errors = {};
    for (const fieldName in this.validationSchema) {
      const validator = this.validationSchema[fieldName];
      const value = this.values[fieldName];
      let fieldValidationResult;
      if (typeof validator === 'function') {
        fieldValidationResult = validator(value);
      } else {
        const args = validator.fieldNames.map(fieldName => this.values[fieldName]);
        fieldValidationResult = validator.validate(...args);
      }
      if (fieldValidationResult !== true) {
        errors[fieldName] = fieldValidationResult;
      }
    }
    if (Object.keys(errors).length !== 0) {
      this.errors = errors;
      return false;
    }
    return true;
  }

  displayErrors = () => {
    for (const fieldName in this.errors) {
      const error = this.errors[fieldName];
      const { field, errorContainer } = this.fields[fieldName];
      field.classList.add('is-invalid');
      errorContainer.innerHTML = error;
    }
  }

  clearErrors = () => {
    for (const fieldName in this.errors) {
      const { field, errorContainer } = this.fields[fieldName];
      field.classList.remove('is-invalid');
      errorContainer.innerHTML = '';
    }
    this.errors = null;
  }
}
