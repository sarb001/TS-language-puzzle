
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from './Slices';

export const Store =  configureStore({
    reducer : {
        root : rootReducer,
    }
})
