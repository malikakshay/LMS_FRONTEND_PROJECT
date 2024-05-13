import { configureStore  } from "@reduxjs/toolkit";

import RazorpaySliceReducer from "../RazorpaySlice";
import courseSliceReducer from '../Slices/CourseSlice' 
import authSliceReducer from "./AuthSlice";  
import LectureSliceReducer from "./LectureSlice";


const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer,
        razorpay: RazorpaySliceReducer,
        lecture: LectureSliceReducer

    },  
    devTools: true
});

export  default store;