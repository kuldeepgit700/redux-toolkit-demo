import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import itemCounterSlice from './slice/itemCounterSlice';

export const store = configureStore({

    reducer : {
      counter : counterReducer,
      itemCounter : itemCounterSlice
    }
});