export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida SocialTaco';
  HomeDiv.className = 'home-div';
  const buttonHome = document.createElement('button');

  buttonHome.classList = 'home-div__button';
  buttonHome.textContent = 'Regresar al Login';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  

  HomeDiv.innerHTML += `
  <div class="new-post__container">
    <textarea class="new-post__container__textarea"></textarea>
    <button class="new-post__container__button">Publicar</button>
  </div>  
  <section class="posts">
    <div class="posts__post">
      <p>Estos tacos me hicieron daño.</p>
      <h6>Christian R. Lara</h6>
    </div>
    <div class="posts__post">
      <p>Estos tacos me hicieron daño.</p>
      <h6>Christian R. Lara</h6>
    </div>
    <div class="posts__post">
      <p>Estos tacos me hicieron daño.</p>
      <h6>Christian R. Lara</h6>
    </div>
  </section>
  `;

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
