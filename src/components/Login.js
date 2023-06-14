import { agregarUnNuevoPost, obtenerTodosLosPosts } from '../lib';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida SocialTaco';
  HomeDiv.className = 'home-div';
  const buttonHome = document.createElement('a');

  buttonHome.classList = 'home-div__button';
  buttonHome.textContent = 'Regresar al Login';
  buttonHome.href="/"
  //buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.innerHTML += `
  <div class="new-post__container">
    <textarea class="new-post__container__textarea"></textarea>
    <button id="new-post__container__new-button" class="new-post__container__button">Publicar</button>
  </div>  
  <section class="posts">
    <div class="posts__post">
      <p>Estos tacos me hicieron daño.</p>
      <h6>Christian R. Lara</h6>
    </div>
  </section>
  `;

  HomeDiv.querySelector('#new-post__container__new-button').addEventListener(
    'click',
    () => {
      const newPostContent = HomeDiv.querySelector(
        '.new-post__container__textarea'
      );

      agregarUnNuevoPost(newPostContent.value).then(() => {
        newPostContent.value = '';
        HomeDiv.querySelector('.posts').innerHTML = '';
        obtenerTodosLosPosts().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            HomeDiv.querySelector('.posts').innerHTML += `
            <div class="posts__post">
              <p>${doc.data().cotenido}</p>
              <h6>${doc.data().usuario}</h6>
            </div>
            `;
          });
        });
      });
    }
  );

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
