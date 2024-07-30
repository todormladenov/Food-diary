import { getSessionToken } from "../utils/sessionTokenManagement";

const appId = 'sFjPTda0ID1hEQPg17opOF9Eulf5c6i7DU8PGRo8';
const apiKey = 'X8j0UvBdBpSTuSUyEgcWO0JUgSCIaQbnCKYKZrpt'

async function requester(method, url, data) {
    let options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-REST-API-Key': apiKey,
        }
    }

    const sessionToken = getSessionToken();

    if (sessionToken) {
        options.headers['X-Parse-Session-Token'] = sessionToken;
    }

    if (data !== undefined) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error);
        }

        return response.json();
    } catch (error) {
        throw new Error(error);
    }

}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');