import { User } from "../../types/models/UserResultat";

  
export async function createUser(userData: User): Promise<any> {
const apiUrl = 'http://localhost:5000/users'; 

return fetch(apiUrl, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
})
    .then((response) => {
    if (response.status !== 201) {
        throw new Error('Network response was not ok.');
    }
    return response.json();
    })
    .catch((error) => {
    console.error('There was a problem with the POST operation:', error);
    // Handle errors here
    throw error;
    });
}