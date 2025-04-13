import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const fetchEvents = createAsyncThunk(
    "calender/fetchEvents",
    async () => {
        console.log("Fetching events from server...");
        const response = await fetch("/api/get-events", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    }
);


const calenderSlice = createSlice({
    name: "calender", 
    initialState: {
        month : dayjs().month(),
        showModel : false,
        selectedDate : dayjs().format(),
        events : [],
        isLoading: false,
        error: null,
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
            const event = action.payload.event;
            state.events.push(event);
            
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.events = action.payload;
        });
        builder.addCase(fetchEvents.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});



export const { incrementMonth, decrementMonth, resetMonth, setMonth, handleModel,setSelectedDate,saveEvent } = calenderSlice.actions;

export default calenderSlice.reducer;