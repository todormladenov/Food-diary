import createPointer from "../utils/createPointer";
import { get, post } from "./api";

const baseUrl = 'https://parseapi.back4app.com/classes/Date';

export const getOneDate = async (userId, diaryDate) => {
    const constraints = {
        dateString: diaryDate,
        userId: createPointer('_User', userId),
    }

    const constraintsString = JSON.stringify(constraints);
    const query = encodeURIComponent(constraintsString);

    const url = baseUrl + '?where=' + query;

    return get(url);
}

export const createDiaryDate = async ({ userId, diaryDate }) => {
    const pointer = createPointer('_User', userId);

    const body = { userId: pointer, dateString: diaryDate };
    return post(baseUrl, body);
}