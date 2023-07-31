import axios from 'axios';


const url='http://localhost:5000';

export const fetchclients= () => axios.get(`${url}/client`);
export const createclient = (newClient) => axios.post(`${url}/client`,newClient);
export const updateclient =(id,updatedClient) => axios.patch(`${url}/client/${id}`,updatedClient);
export const deleteclient =(id)=> axios.delete(`${url}/client/ ${id}`);