import { createSlice } from '@reduxjs/toolkit'

export const a = createSlice({
    name: 'counter',
    initialState : { value:0 },
    reducers :{

        increment: (state) => {
            state.value +=1
        },
        decrement: (state) =>{
            state.value -=1
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
          },
    },
})

export const { increment, decrement, incrementByAmount } = a.actions
export default a.reducer // Burada counterReducer olarak export ediliyor