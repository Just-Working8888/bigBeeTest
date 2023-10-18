import { configureStore } from '@reduxjs/toolkit';
import windowStateReducer from './slices/windowStateSlice';
import eventsStateReducer from './slices/eventsSlice';
import periodReducer from './slices/currentPeriodSlice';
import mainReducer from './slices/mainSlice';

const store = configureStore({
  reducer: {
    windowState: windowStateReducer,
    eventsState: eventsStateReducer,
    period: periodReducer,
    main: mainReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
