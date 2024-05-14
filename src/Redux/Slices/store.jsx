import { configureStore  } from "@reduxjs/toolkit";

import RazorpaySliceReducer from "../RazorpaySlice";
import courseSliceReducer from '../Slices/CourseSlice' 
import authSliceReducer from "./AuthSlice";  
import LectureSliceReducer from "./LectureSlice";
import StateSliceReducer from "./StateSlice";


const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer,
        razorpay: RazorpaySliceReducer,
        lecture: LectureSliceReducer,
        stat: StateSliceReducer,

    },  
    devTools: true
});

export  default store;