import axios from 'axios';
import { getAccessToken } from './accessToken';
import { configuration } from './config';

export async function FetchUserData() {
    try {
        const accessToken = await getAccessToken();
        const response = await axios.get(`${configuration.apiConfig.uri}/users`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log(response.data.value.length,'users');
        console.log('next link is:', response.data['@odata.nextLink']);
    } catch (error) {
        console.error(error);
    }
}

export async function FetchAllUsers(nextLink = null) {
    let users: any = [];
    let requestUrl = nextLink || `${configuration.apiConfig.uri}/users`;

    while (requestUrl) {
        const accessToken = await getAccessToken();
        const response = await axios.get(requestUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        users = users.concat(response.data.value);
        requestUrl = response.data['@odata.nextLink'];
    }
    console.log(users.length,'users')
    // return users;
}
