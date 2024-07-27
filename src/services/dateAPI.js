import createPointer from "../utils/createPointer";
import { get, post, put } from "./api";

const baseUrl = 'https://parseapi.back4app.com/classes/Date';

export const getOneDiaryDate = async (userId, diaryDate) => {
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

export const getOneDiaryDateById = (dateId) => get(`${baseUrl}/${dateId}`);

export const updateDiaryDateById = (dateId, diaryData) => put(`${baseUrl}/${dateId}`, diaryData);