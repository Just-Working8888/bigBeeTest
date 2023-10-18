import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from 'api';
import { mockEvents } from '../../routes/Events/mockData';

export const fetchEvents = createAsyncThunk(
  'getEvents/fetchAll',
  async (props: { current: number, pageSize: number, filters: {[key: string]: string[] | number[]}, period: [string, string, string], actionType: string}, thunkAPI) => {
    try {
      // const copyFilters = JSON.parse(JSON.stringify(props?.filters));
      // for (let filter in copyFilters) {
      //   if (filter === 'action_code' || filter === 'system_code') copyFilters[filter] = copyFilters[filter]?.join(',').split(',') || [];
      // };

      const source = axios.CancelToken.source();
      thunkAPI.signal.addEventListener('abort', () => source.cancel());

      const events = await api.getEvents( props.current, props.pageSize, props.filters, props.period, props.actionType, source.token );
      return events.data;

    } catch (e) {
      return mockEvents;
      // return thunkAPI.rejectWithValue('Загрузка не удалась');
    }
  }
);
