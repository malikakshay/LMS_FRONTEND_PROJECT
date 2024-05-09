import { configureStore  } from "@reduxjs/toolkit";

import courseSliceReducer from '../Slices/CourseSlice' 
import authSliceReducer from "./AuthSlice";  


const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer     
    },  
    devTools: true
});

export  default store;