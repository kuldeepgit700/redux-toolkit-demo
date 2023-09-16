import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value : 0
}

export const itemCounterSlice = createSlice({

    name: 'itemCounter',
    initialState,
    reducers: {
        itemIncrement : (state)=>{
            state.value += 1
        },
        itemDecrement : (state) =>{
          state.value -= 1
        }
    }

});

export const {itemIncrement, itemDecrement}  = itemCounterSlice.actions;

export default itemCounterSlice.reducer;
