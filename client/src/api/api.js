import axios from 'axios';

export const listaClientes = userId => {
  return axios.get('clientes', { params: { uid: userId } });
};

export const cadastraCliente = (cliente, userId) => {
  return axios.post('clientes', cliente, { params: { uid: userId } });
};

export const removeCliente = (clienteId, userId) => {
  return axios.delete('clientes/' + clienteId, { params: { uid: userId } });
};

const controllers = {
  listaClientes,
  cadastraCliente,
  removeCliente
};

export default controllers;
