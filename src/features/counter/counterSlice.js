import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: intialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
            console.log("reducer-increment - " +state.count);
        },
        decrement: (state) => {
            state.count -= 1;
            console.log("reducer-decrement - " +state.count);
        },
        reset: (state) => {
            state.count = 0;
            console.log("reducer-reset - " +state.count);
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
            console.log("reducer-incrementByAmount - " +state.count);
        },
    },
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;