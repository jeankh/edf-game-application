import { User } from "../../types/models/UserResultat";

  
export async function createUser(userData: User): Promise<any> {
    const apiUrl = 'http://localhost:5000/users'; 
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.status !== 201) {
        throw new Error('Network response was not ok.');
      }
  
      return response.json(); // Return the parsed JSON response
    } catch (error) {
      console.error('There was a problem with the POST operation:', error);
      throw error;
    }
  }