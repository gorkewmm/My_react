import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState= {
    users: [],//başlangıçda users adında içi boş bir array  //! state
    loading : false
}


export const getAllUsers = createAsyncThunk ("users",async()=>{
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data; //! action
})

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{
        //http isteği olmazsa kullanılır
    },
    extraReducers:(builder) =>{
        //http isteklerinde kullanılır
        builder.addCase(getAllUsers.fulfilled, (state,action)=>{// ilk değişken statei, ikinci değişken (return response.data) yani actiondur.
            state.users = action.payload // users arrayine, response.datadan dönen değerleri yani acitonu değerlerini ekledik
        })
    }
})

export const { }= userSlice.actions // reducersların içine yazdıgın fonksiyonalrı açarsın
export default userSlice.reducer // http isteklerinde kulanılır