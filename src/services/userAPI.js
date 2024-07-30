import { get, put } from "./api";


const baseUrl = 'https://parseapi.back4app.com/users';

export const updateUserNutritionGoal = (userId, nutritionGoal) => put(`${baseUrl}/${userId}`, nutritionGoal);
