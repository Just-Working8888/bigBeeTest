import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// where 1 = 1/6 (the smallest size); 6 = 6/6 (the biggest size);
export type colGridType = 1 | 2 | 3 | 4 | 5 | 6;
export type indentType  = 8 | 16 | 24 | 32;

interface DataState {
  indentValues: indentType[];
  colCountKey: number;
  indentKey: number;
  windowWidth: number;
};

const initialState: DataState = {
  indentValues: [8, 16, 24, 32],
  colCountKey: 6,
  indentKey: 3,
  windowWidth: window.innerWidth,
};

const windowStateSlice = createSlice({
  name: 'windowState',
  initialState,
  reducers: {
    setWindowWidth(state, action: PayloadAction<number>) {      
      state.windowWidth = action.payload;      
      if (action.payload >= 1088) {
        state.colCountKey = 6;
        state.indentKey = 3;
      } else if ( action.payload >= 736 && action.payload < 1088) {
        state.colCountKey = 4;
        state.indentKey = 3;
      } else if (action.payload >= 360 && action.payload < 736) {
        state.colCountKey = 2;
        state.indentKey = 2;
      } else if (action.payload < 360) {
        state.colCountKey = 2;
        state.indentKey = 1;
      }
    },
  },
});

const windowStateReducer = windowStateSlice.reducer;
export const {
  setWindowWidth,
} = windowStateSlice.actions;
export default windowStateReducer;
