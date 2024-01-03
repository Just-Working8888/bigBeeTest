import { configureStore } from '@reduxjs/toolkit';
import windowStateReducer from './slices/windowStateSlice';
import eventsStateReducer from './slices/eventsSlice';
import periodReducer from './slices/currentPeriodSlice';
import mainReducer from './slices/mainSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    windowState: windowStateReducer,
    eventsState: eventsStateReducer,
    period: periodReducer,
    main: mainReducer,
    auth: authReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
