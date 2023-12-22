export async function getData(endpoint: string): Promise<any> {
  const apiUrl = `http://localhost:5000/${endpoint}`;

  return fetch(apiUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    });
}
