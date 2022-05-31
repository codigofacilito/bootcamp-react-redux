const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export default async function apiCall(url, params) {
 try {
  const response = await fetch(`${BASE_URL}${url}`, params);
  const data = await response.json();
  return Promise.resolve(data);
 } catch (error) {
  return Promise.reject(error);
 }
};