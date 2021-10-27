const registerForm = document.querySelector('#register-form');
const registerFormResultContainer = document.querySelector('#register-form-result-container');

const handleRegisterForm = (event) => {
  event.preventDefault();
  const fieldValues = Array
    .from(registerForm)
    .filter(field => field.name)
    .reduce((fieldValuesObject, field) => {
      fieldValuesObject[field.name] = field.value;
      return fieldValuesObject;
    }, {});
  renderResult(fieldValues);
}

const renderResult = fieldValues => {
  let result = '<div>{</div>';
  for (const fieldName in fieldValues) {
    result += `<div class="ms-3"><strong>${fieldName}</strong><span>: ${fieldValues[fieldName]}</span></div>`;
  }
  result += '<div>}</div>';
  registerFormResultContainer.innerHTML = result;
}

registerForm.addEventListener('submit', handleRegisterForm);

// 21:05