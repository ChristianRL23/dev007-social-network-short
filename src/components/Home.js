export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia sesión';
  //buttonLogin.setAttribute('type', 'submit');

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/login')
  });

  HomeDiv.innerHTML += `
    <input placeholder="Correo electrónico" type="email">
    <input placeholder="Contraseña" type="password">
    <img src="./../btn-google.png" class="button-google" alt="button">
  `;

  HomeDiv.appendChild(buttonLogin);

  return HomeDiv;
};
