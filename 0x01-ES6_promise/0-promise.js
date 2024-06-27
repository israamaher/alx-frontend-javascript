export default function getResponseFromAPI(){
  return new Promise((resolve, reject) => {
    if (apiEndpoint) resolve({ status: 200, body: 'Success' });
    reject(Error('Failed to fetch API'));
  });
}
