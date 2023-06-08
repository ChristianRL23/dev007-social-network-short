import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase.js';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export const crearUsuarioConCorreoYContraseña = (email, password) => {
  console.log(email);
  console.log(password);
  return createUserWithEmailAndPassword(auth, email, password);
};

export const agregarUnNuevoPost = (contenido) => {
  return addDoc(collection(db, 'posts'), {
    cotenido: contenido,
    usuario: auth.currentUser.email,
  });
};

export const obtenerTodosLosPosts = () => {
  return getDocs(collection(db, 'posts'));
};
