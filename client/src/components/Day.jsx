import dayjs from "dayjs";
import React from "react";
import { handleModel, setSelectedDate } from "../store/calender-slice/index.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Day = ({day, weekIndex}) => {
    const showModel = useSelector((state) => state.calender.showModel);
    const isCurrentDate = () => {
        return day.format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')
      }
    const dispatch = useDispatch(); 
    
    const dayColors = {
        "work": "bg-blue-100",
        "personal": "bg-green-100",
        "family": "bg-red-100",
        "other": "bg-yellow-100",
        "meeting": "bg-purple-100",
    }

    const events = useSelector((state) => state.calender.events);
    const dayEvent = events.filter((event) => {
        const eventStartDate = dayjs(event.eventStartdate).format('YYYY-MM-DD');
        const currentDat = dayjs(day).format('YYYY-MM-DD'); 
        return eventStartDate === currentDat;
    });

  return (
    <div
      className={`p-5 border border-gray-200 ${day.isToday ? "bg-blue-100" : ""} ${
        showModel ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      onClick={() => {
        dispatch(handleModel({ showModel: true  }));
        dispatch(setSelectedDate({ selectedDate: day.format() }));
      }}
    >
      {weekIndex === 0 && (
        <div className="text-gray-500 text-sm font-semibold mb-1">
          { dayjs(day).format("ddd") }
          
        </div>
      )}
      <span 
      className={`text-center text-sm font-mono px-2 py-1 ${isCurrentDate() ? "bg-blue-600 text-white rounded-full" : "text-gray-800"}`}>
        {dayjs(day).format("DD")}
      </span>
      <div className="py-1">
        {dayEvent.map((event) => (
          <div key={event._id} className={`text-xs font-mono mt-1 p-2 rounded ${dayColors[event.eventCategoryName]}`}>
            {event.eventTitle}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
