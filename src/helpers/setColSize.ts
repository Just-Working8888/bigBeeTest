import { colGridType } from "store/slices/windowStateSlice";
import store from 'store/index';

// пересчет размера столбцов с 24 колоночной системы antd в 6 колоночную (с поправкой на размер экрана)
export const setColSize = (colSize: colGridType) => {
  const { windowState } = store.getState();
  const { colCountKey } = windowState;
  
  const antdGrid = 24;
  const checkMinValue = colCountKey / colSize >= 1 
    ? colCountKey / colSize 
    : 1;
  const sizeAdapted = colCountKey / checkMinValue;
  
  return Math.round(antdGrid / (colCountKey / sizeAdapted));
};
