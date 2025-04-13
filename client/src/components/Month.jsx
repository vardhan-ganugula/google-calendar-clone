import React, { use, useEffect } from "react";
import DayComponent from "./Day";
import EventModel from "./EventModel";
import { useSelector } from "react-redux";
import { handleModel, saveEvent,fetchEvents } from "../store/calender-slice/index.js";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

const Month = ({ currMonth }) => {
  const showModel = useSelector((state) => state.calender.showModel);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.calender.events);
  const selectedMonth = useSelector((state) => state.calender.month);



  const presentMonthEvents = events.filter((event) => {

    const eventStartMonth = dayjs(event.eventStartdate).month();
    
  
    return selectedMonth === eventStartMonth;
  });
  

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    dispatch(handleModel({ showModel: false }));
    const eventTitle = e.target.eventTitleName.value;
    const eventCategoryName = e.target.eventCategoryName.value;
    const eventStartdate = e.target.eventStartDate.value;
    const eventEnddate = e.target.eventEndDate.value;
    const newEvent = {
      eventTitle,
      eventCategoryName,
      eventStartdate,
      eventEnddate,
    }
      try {
        const response = await fetch("/api/add-event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent),
        });

        dispatch(
          saveEvent({
            event: await response.json(),
          })
        );

    } catch (error) {
        state.error = error.message;
    }


    
  };

  useEffect(() =>{

    dispatch(fetchEvents());


  }, [])

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5 p-4 h-full w-full min-w-[900px] min-h-[700px] bg-white rounded-lg shadow-md">
      {currMonth.map((week, weekIndex) => (
        <React.Fragment key={weekIndex}>
          {week.map((day, dayIndex) => (
            <DayComponent day={day} weekIndex={weekIndex} key={dayIndex} presentMonthEvents={presentMonthEvents} />
          ))}
        </React.Fragment>
      ))}
      {showModel && (
        <EventModel
          onClose={() => {
            dispatch(handleModel({ showModel: false }));
          }}
          onSubmit={handleSubmitEvent}
        />
      )}
    </div>
  );
};

export default Month;
