import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEvents } from 'store/reducers/eventsReducer';
import { IEventData } from '../models/IEventData';
import { TablePaginationConfig } from 'antd';

interface initialStateType {
  events: IEventData;
  isLoadingEvents: boolean;
  errorEvents: string;
  eventPagination: TablePaginationConfig;
}
const initialState: initialStateType = {
  events: { results: [], count: 0 },
  isLoadingEvents: false,
  errorEvents: '',
  eventPagination: { current: 1, pageSize: 10 },
};

const eventsSlice = createSlice({
  name: 'dataEvents',
  initialState,
  reducers: {
    setEventData(state, action: PayloadAction<IEventData>) {
      state.events = action.payload;
    },
    setEventPagination(state, action: PayloadAction<TablePaginationConfig>) {
      state.eventPagination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action: PayloadAction<IEventData>) => {
      state.isLoadingEvents = false;
      state.errorEvents = '';
      state.events = action.payload;
    })
    builder.addCase(fetchEvents.pending, (state) => {
      state.isLoadingEvents = true;
    })
    builder.addCase(fetchEvents.rejected, (state, action: any) => {
      if ( action?.error?.message !== 'Aborted' ) {
        state.isLoadingEvents = false;
        state.errorEvents = action.payload;
      }
    })
  },
});

const eventsReducer = eventsSlice.reducer;
export const { setEventData, setEventPagination } = eventsSlice.actions;
export default eventsReducer;
