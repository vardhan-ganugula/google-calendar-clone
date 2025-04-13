import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const calenderSlice = createSlice({
    name: "calender", 
    initialState: {
        month : dayjs().month(),
        showModel : false,
        selectedDate : dayjs().format(),
        events : []
    },
    reducers: {
        incrementMonth: (state) => {
            state.month += 1;
        },
        decrementMonth: (state) => {
            state.month -= 1;
        },
        resetMonth: (state) => {
            state.month = dayjs().month();
        },
        setMonth: (state, action) => {
            state.month = action.payload;
        },
        handleModel: (state, action) => {
            state.showModel = action.payload.showModel;
        },
        setSelectedDate: (state, action) => {
            state.selectedDate = action.payload.selectedDate;
        },
        saveEvent: (state, action) => {
            state.events.push(action.payload.event)
        },
    }
});



export const { incrementMonth, decrementMonth, resetMonth, setMonth, handleModel,setSelectedDate,saveEvent } = calenderSlice.actions;

export default calenderSlice.reducer;