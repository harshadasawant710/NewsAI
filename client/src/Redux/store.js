import reducer from './slice/authSlice'
import authreduce from './slice/authSlice'
import { configureStore } from '@reduxjs/toolkit'
import loadingReduces from './slice/Loading'

const store = configureStore({
    reducer:{
        loading:loadingReduces,
        auth:authreduce
    }
})

export default store;