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

    if (data !== undefined) {
        options.headers = { 'content-type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    return response.json();
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');