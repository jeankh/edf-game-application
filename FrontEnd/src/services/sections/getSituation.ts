export async function  getData(endpoint: string): Promise<any> {
    const apiUrl = `http://localhost:5000/${endpoint}`; // Assuming the endpoint is appended to the base URL
  
    return fetch(apiUrl)
      .then((response) => {
        if (response.status === 200) {
            return response.json();
          
        }
        else {
          throw new Error("Network response was not ok.");
        }
         // Parse the JSON data received from the server
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        // You can handle errors here, either by logging or returning a specific value
        return []; // Return an empty array or handle error as required
      });
  }
  