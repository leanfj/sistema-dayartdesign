import axios from 'axios';

export const loginUsuario = (email, password) => {
  return axios.post('login', {
    email: email,
    password: password
  });
};

export const verificaUsuarioLogado = () => {
  return axios.get('login');
};

export const logoutUsuario = () => {
  return axios.get('logout');
};

const controllers = {
  loginUsuario,
  verificaUsuarioLogado,
  logoutUsuario
};

export default controllers;
