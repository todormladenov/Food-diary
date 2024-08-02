import createPointer from "../utils/createPointer";
import { get, post } from "./api";

const baseUrl = 'https://parseapi.back4app.com/classes/Food';

export const searchFoodsByName = (values) => {
    const constraints = { 'name': { '$regex': values.name } }

    const constraintsString = JSON.stringify(constraints);
    const query = encodeURIComponent(constraintsString);

    const url = baseUrl + '?where=' + query;

    return get(url)
}

export const createFood = (foodData, ownerId) => {
    const pointer = createPointer('_User', ownerId);

    const body = {
        ownerId: pointer,
        name: foodData.name,
        protein: Number(foodData.protein),
        carbs: Number(foodData.carbs),
        fat: Number(foodData.fat),
        calories: Number(foodData.calories),
        servingSize: foodData.servingSize,
    };
    return post(baseUrl, body);
}

export const getUsersCreatedFoods = (ownerId) => {
    const pointer = createPointer('_User', ownerId);
    
    const constraintsString = JSON.stringify({ ownerId: pointer });
    const query = encodeURIComponent(constraintsString);

    const url = baseUrl + '?where=' + query;

    return get(url);
}