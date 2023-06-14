import { crearUsuarioConCorreoYContraseña } from '../lib';

export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('a');
  buttonLogin.textContent = 'Inicia sesión';
  buttonLogin.href = '/login'
  //buttonLogin.setAttribute('type', 'submit');

  /*buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const inputEmail = HomeDiv.querySelector('#input__email');
    const inputPassword = HomeDiv.querySelector('#input__password');

    crearUsuarioConCorreoYContraseña(inputEmail.value, inputPassword.value)
      .then((userCredentials) => {
        console.log(userCredentials);
        onNavigate('/login');
      })
      .catch((err) => console.log(err));
    //onNavigate('/login');
  });
  */

  HomeDiv.innerHTML += `
    <input id="input__email" placeholder="Correo electrónico" type="email">
    <input id="input__password" placeholder="Contraseña" type="password">
    <img src="./../btn-google.png" class="button-google" alt="button">
  `;

  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
