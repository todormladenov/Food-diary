import { get, post } from "./api";

const baseUrl = 'https://parseapi.back4app.com/';

export const register = (username, password) => post(`${baseUrl}/users`, { username, password });

export const login = (username, password) => post(`${baseUrl}/login`, { username, password });

export const logout = () => post(`${baseUrl}/logout`);

export const authUser = () => get(`${baseUrl}/users/me`);