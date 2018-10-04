import axios from 'axios';

export const listaClientes = userId => {
  return axios.get('clientes', {
    headers: { Authorization: userId },
    params: { uid: userId }
  });
};

export const cadastraCliente = (cliente, userId) => {
  return axios.post('clientes', cliente, {
    headers: { Authorization: userId }
  });
};

export const removeCliente = (clienteId, userId) => {
  return axios.delete('clientes/' + clienteId, {
    headers: { Authorization: userId }
  });
};

const controllers = {
  listaClientes,
  cadastraCliente,
  removeCliente
};

export default controllers;
