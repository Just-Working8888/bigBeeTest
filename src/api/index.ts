import axios, { InternalAxiosRequestConfig } from 'axios';
import events from './events';
import { getCookie } from 'helpers/cookies';

const instance = axios.create({
  // @ts-ignore
  baseURL: window.REACT_APP_SERVER_API !== 'REPLACE_REACT_APP_SERVER_API' ? window.REACT_APP_SERVER_API : process.env.REACT_APP_SERVER_API || 'http://localhost:8000/api',
  withCredentials: true,
})

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const kc_access = getCookie('kc-access') || 'test_token';
  if (kc_access) config.headers!['kc-access'] = kc_access;
  return config
});

const { getEvents, getEventsFilters, getNewEvenntsFilters } = events;

const api = {
  getEvents,
  getEventsFilters,
  getNewEvenntsFilters,
}

export { instance };
export default api;
