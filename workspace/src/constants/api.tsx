export const HEADERS = {
    'ContentType': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    //'Authorization': "Bearer " + this.authorService.getToken(),
}
export const API_BASE_URL = 'https://random-data-api.com/api';

export const API_URL = {
    HOME: {
        ADDRESS:`${API_BASE_URL}/address/random_address?size=100`
    }
}