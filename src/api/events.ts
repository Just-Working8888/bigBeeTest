import { CancelToken } from 'axios';
import { instance } from './index'

const getEvents = (current: number, pageSize: number, filters: { [key: string]: any[] }, period: [string, string, string], actionType: string, sourceToken?: CancelToken) => instance.get(`/events/?limit=${pageSize}&offset=${current}&period=${period[0]},${period[1]}&type=${actionType}&filters=${JSON.stringify(filters)}`, {
  cancelToken: sourceToken,
});
const getEventsFilters = (arrColumnsName: string[], period: [string, string, string], sourceToken?: CancelToken) => instance.get(`/filters/event/?entries=${arrColumnsName.join(',')}&period=${period[0]},${period[1]}`, {
  cancelToken: sourceToken,
});
const getNewEvenntsFilters = (arrColumnsName: string[], currentFilters: string, period: [string, string, string], sourceToken?: CancelToken) => instance.get(`/filters/event/?entries=${arrColumnsName.join(',')}&filters=${currentFilters}&period=${period[0]},${period[1]}`, {
  cancelToken: sourceToken,
});


export const login = (username: string, password: string, sourceToken?: CancelToken) =>
  instance.post('/users/login/', { username, password }, { cancelToken: sourceToken });

const endpoints = { getEvents, getEventsFilters, getNewEvenntsFilters };
export default endpoints;
