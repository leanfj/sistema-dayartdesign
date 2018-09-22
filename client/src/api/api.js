import axios from "axios";

export const loginUsuario = (email, password) => {
  return axios.post("login", {
    email: email,
    password: password
  });
};

export const verificaUsuarioLogado = () => {
  return axios.get("login");
};

export const logoutUsuario = () => {
  return axios.get("logout");
};

export const listaClientes = () => {
  return axios.get("clientes");
};

export const cadastraCliente = cliente => {
  return axios.post("clientes", cliente);
};

export const removeCliente = clienteId => {
  return axios.delete("clientes/" + clienteId);
};

const controllers = {
  loginUsuario,
  verificaUsuarioLogado,
  logoutUsuario,
  listaClientes,
  cadastraCliente,
  removeCliente
};

export default controllers;
