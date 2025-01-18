'use client';
import axios from 'axios';

//Methods for making All API calls using Axios

axios.defaults.withCredentials = true;
const baseUrl = 'http://localhost:8080/api/v1/';

// Uncomment the below code and comment the above baseUrl Const, if you want to use with local backend server.

// const baseUrl =
//   process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080/api/v1/';

const getToken = () => {
  const authDetailsString =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('authDetails')
      : null;
  if (authDetailsString !== null) {
    const authDetails = JSON.parse(authDetailsString);
    const token = authDetails.token;
    return token;
  }
};

const token = getToken();

const getHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

export const GET = async <T,>(route = ''): Promise<T> => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const response = await axios.get(apiRoute, {
      headers: getHeaders(),
    });
    return response as T;
  } catch (error) {
    return error as T;
  }
};

export const POST = async <T,>(route = '', body = {}): Promise<T> => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const response = await axios.post(apiRoute, body, {
      headers: getHeaders(),
    });
    return response as T;
  } catch (error) {
    return error as T;
  }
};

export const PUT = async <T,>(route = '', body = {}): Promise<T> => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const response = await axios.put(apiRoute, body, {
      headers: getHeaders(),
    });
    return response as T;
  } catch (error) {
    return error as T;
  }
};

export const DELETE = async <T,>(route = ''): Promise<T> => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const response = await axios.delete(apiRoute, {
      headers: getHeaders(),
    });
    return response as T;
  } catch (error) {
    return error as T;
  }
};
