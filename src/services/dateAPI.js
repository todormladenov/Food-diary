import { get } from "./api";

const baseUrl = 'https://parseapi.back4app.com/classes/Date';

export const getOneDate = async (userId, diaryDate) => {
    const pointer = {
        dateString: diaryDate,
        userId: {
            __type: 'Pointer',
            'className': '_User',
            objectId: userId,
        },
    }

    const pointerString = JSON.stringify(pointer);
    const query = encodeURIComponent(pointerString);

    const url = baseUrl + '?where=' + query;

    return get(url);
}