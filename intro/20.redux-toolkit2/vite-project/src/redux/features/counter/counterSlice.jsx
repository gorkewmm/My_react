import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 24
}

export const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
     decreament: (state)=> {
        state.counter -=1 /* Bulundugu degerden bir eksiğini bana ver */
     },
     increament: (state)=> {
        state.counter +=1 /* Bulundugun degerin bir fazlasını bana ver */
     },
     increamentCustom: (state, action)=>{
        state.counter += action.payload
     }
   }
})

export const {decreament , increament , increamentCustom} = counterSlice.actions

export default counterSlice.reducer