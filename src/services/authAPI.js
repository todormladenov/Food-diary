import { post } from "./api";

const baseUrl = 'https://parseapi.back4app.com/users';

export const register = (username, password) => post(baseUrl, {username, password});