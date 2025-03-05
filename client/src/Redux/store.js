import reducer from './slice/authSlice'
import authreduce from './slice/authSlice'
import { configureStore } from '@reduxjs/toolkit'
import loadingReduces from './slice/Loading'
import newsReducer from './slice/newsSlice'

const store = configureStore({
    reducer:{
        loading:loadingReduces,
        auth:authreduce,
        news : newsReducer
    }
})

export default store;