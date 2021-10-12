const registerForm = document.querySelector('#register-form');
const registerFormResultContainer = document.querySelector('#register-form-result-container');

// 1. Vykdyti funkciją, kuomet paspaudžiamas "submit mygtukas". Submit'inama forma <registerForm>
const handleRegisterForm = (event) => {
  event.preventDefault();
  // 2. Nuskaityti formos įvesčių duomenis
  /*
    2.1 - Atspausdinti visus formoje esančius įvesties laukus
    2.2 - Atspausdinti visų formoje esančių įvestie laukų reikšmes
 
  */
}

registerForm.addEventListener('submit', handleRegisterForm);


// 3. Suformuoti formos duomenis reikiamu formatu
// 4. Pateikti duomenis į rezultato elementą <registerFormResultContainer>