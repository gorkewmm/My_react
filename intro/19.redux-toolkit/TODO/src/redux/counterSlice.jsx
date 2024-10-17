import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 20,
}
  
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament : (state)=>{
            state.value = state.value + 1;
        },
        decreament : (state)=>{
            state.value = state.value - 1;
        }
    },
})


export const { increament, decreament } = counterSlice.actions
export default counterSlice.reducer