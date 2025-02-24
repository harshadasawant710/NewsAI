import {setCookie, removeCookie} from '../../utils/utils/';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
//import { data } from 'react-router-dom';
import { toast } from 'sonner'


const initialState = {
    loading: false,
    authenticated : false,
    name : null,
    id : null,
    preferences : [],
}

export const registerUser = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
    try {
        //console.log("sending data", data)
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, data);
        return res.data;
    } catch (error) {
        return rejectWithValue(error);
        // return rejectWithValue(error.response?.data);    
    }
});

export const LoginUser = createAsyncThunk('auth/Login', async (data, { rejectWithValue }) => {
    try {
        //console.log("sending data", data)
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/Login`, data, {withCredentials:true});
        const verifyres = await axios.get(`${import.meta.env.VITE_API_URL}/auth/verify`,{withCredentials:true})
        return {...res.data, ...verifyres.data};
    } catch (error) {
        return rejectWithValue(error);
        // return rejectWithValue(error.response?.data);    
    }
});



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        signOut : function(state){
            state.authenticated = false;
            state.id = null;
            state.name = null;
            removeCookie('isAuthenticated')
            removeCookie('name')
            removeCookie('id')
        }
    },
    extraReducers: (builder) => {

        builder.addCase(registerUser.pending, (state) => {
            state.loading = true
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload.message)
            toast.success(action.payload.message)
        }).addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            console.log(action.payload.message)
            toast.error(action.payload.response.data.message)
        }).addCase(LoginUser.pending, (state) => {
            state.loading = true
        }).addCase(LoginUser.fulfilled, (state, action) => {
            state.loading = false
            state.authenticated = action.payload.authenticated
            state.name = action.payload.name
            state.id = action.payload.id
            setCookie('isAuthenticated', action.payload.authenticated)
            setCookie('name', action.payload.name)
            setCookie('id', action.payload.id)
            state.preferences = action.payload.preferences
            console.log(action.payload)
            toast.success(action.payload.message)
        }).addCase(LoginUser.rejected, (state, action) => {
            state.loading = false
        })

    }
})

export default authSlice.reducer
export const {signOut} = authSlice.actions