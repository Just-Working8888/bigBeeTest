import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPeriod } from 'helpers/periodBuilder';

export type PeriodSelectTypes = 'hour' | 'day' | 'week' | 'month' | 'year' | 'period' | 'today';

interface DataState {
  currentPeriod: PeriodSelectTypes;
  period: [string, string, string];
}

const initialState: DataState = {
  currentPeriod: 'month',
  period: getPeriod('month'),
};

const periodSlice = createSlice({
  name: 'currentPeriodState',
  initialState,
  reducers: {
    setCurrentPeriod(state, action: PayloadAction<{currentPeriod: PeriodSelectTypes, period?: [string, string, string]}>) {
      state.currentPeriod = action.payload.currentPeriod;
      state.period = getPeriod(action.payload.currentPeriod, action.payload.period);
    },
  },
});

const periodReducer = periodSlice.reducer;
export const { setCurrentPeriod } = periodSlice.actions;
export default periodReducer;
