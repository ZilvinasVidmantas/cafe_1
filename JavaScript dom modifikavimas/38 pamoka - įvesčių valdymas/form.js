const registerForm = document.querySelector('#register-form');
const registerFormResultContainer = document.querySelector('#register-form-result-container');
const registerFormInputName = registerForm.querySelector('#register-name');
const registerFormInputLastname = registerForm.querySelector('#register-lastname');
const registerFormInputEmail = registerForm.querySelector('#register-email');
const registerFormInputCity = registerForm.querySelector('#register-city');
const registerFormSelectState = registerForm.querySelector('#register-state');
const registerFormInputZip = registerForm.querySelector('#register-zip');

// 1. Vykdyti funkciją, kuomet paspaudžiamas "submit mygtukas". Submit'inama forma <registerForm>
const handleRegisterForm = (event) => {
  event.preventDefault();
  // 3. Suformuoti formos duomenis reikiamu formatu
  const data = {
    firstname: registerFormInputName.value,
    lastname: registerFormInputLastname.value,
    email: registerFormInputEmail.value,
    city: registerFormInputCity.value,
    state: registerFormSelectState.value,
    zip: registerFormInputZip.value,
  };
  console.log(data);
}

registerForm.addEventListener('submit', handleRegisterForm);


// 4. Pateikti duomenis į rezultato elementą <registerFormResultContainer>