import { configureStore } from "@reduxjs/toolkit";
import calenderReducer from "./calender-slice";

export const store = configureStore({
    reducer: {
        calender: calenderReducer,
    },
});