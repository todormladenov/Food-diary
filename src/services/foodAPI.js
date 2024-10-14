import createPointer from "../utils/createPointer";
import { del, get, post, put } from "./api";

const baseUrl = 'https://parseapi.back4app.com/classes/Food';

export const searchFoods = ({ name, category }, limit, skip) => {
    const constraints = {}

    if (name) {
        constraints['name'] = {
            '$regex': name,
            '$options': 'i'
        }
    }

    if (category) {
        constraints['category'] = category
    }

    const constraintsString = JSON.stringify(constraints);
    const query = encodeURIComponent(constraintsString);

    const url = baseUrl + '?where=' + query + `&limit=${limit}&skip=${skip}&count=1`;

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

export const getCreatedFoods = (limit, skip) => {
    const url = baseUrl + `?limit=${limit}&skip=${skip}&count=1`;

    return get(url);
}

export const deleteFoodById = (foodId) => del(`${baseUrl}/${foodId}`);

export const getFoodById = (foodId) => get(`${baseUrl}/${foodId}`);

export const editFood = (foodId, foodData) => {
    const body = {
        name: foodData.name,
        protein: Number(foodData.protein),
        carbs: Number(foodData.carbs),
        fat: Number(foodData.fat),
        calories: Number(foodData.calories),
        servingSize: foodData.servingSize,
    };

    return put(`${baseUrl}/${foodId}`, body);
} 