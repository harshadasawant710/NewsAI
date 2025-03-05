import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {setCookie, removeCookie, getCookie} from '../../utils/utils/';
import axios from "axios";

const initialState = {
loading:false
}

const id = getCookie('id');

export const setPrefrenece = createAsyncThunk('/prefereneces', async(data,{rejectWithValue})=>{
    try{
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/preferences/${id}`, data);
        return res.data
    }
    catch(error){
        return rejectWithValue(error)
    }
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(setPrefrenece.pending , (state)=>{
            state.loading = true
        })
        .addCase(setPrefrenece.fulfilled, (state)=>{
            state.loading = false

        })
        .addCase(setPrefrenece.rejected, (state)=>{
            state.loading = false
        })
    }
})


export default newsSlice.reducer