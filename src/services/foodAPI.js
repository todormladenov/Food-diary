import { get } from "./api";

const baseUrl = 'https://parseapi.back4app.com/classes/Food';

export const searchFoodsByName = (values) => {
    const constraints = { 'name': { '$regex': values.name } }

    const constraintsString = JSON.stringify(constraints);
    const query = encodeURIComponent(constraintsString);

    const url = baseUrl + '?where=' + query;

    return get(url)
}