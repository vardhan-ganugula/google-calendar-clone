import dayjs from "dayjs";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  incrementMonth,
  decrementMonth,
  resetMonth,
} from "../store/calender-slice";


import { useSelector } from "react-redux";
const CalendarHeader = () => {
  const dispatch = useDispatch();
  const month = useSelector((state) => state.calender.month);
  const currMonth = dayjs().month(month).format("MMMM YYYY");
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="bg-gray-200 rounded-lg flex items-center overflow-hidden h-10  ">
        <button
          className="hover:bg-gray-200 p-3 cursor-pointer"
          onClick={() => dispatch(decrementMonth())}
        >
          <FaArrowLeft className="text-gray-500" size={20} />
        </button>
        <button
          className=" hover:bg-gray-200 text-zinc-600 text-md font-bold p-3 cursor-pointer"
          onClick={() => dispatch(resetMonth())}
        >
          <span>Today</span>
        </button>
        <button
          className="p-3  hover:bg-gray-200 cursor-pointer"
          onClick={() => dispatch(incrementMonth())}
        >
          <FaArrowRight className="text-gray-500 " size={20} />
        </button>
      </div>
      <div>
        <h1>
          {currMonth}
        </h1>
      </div>
    </header>
  );
};

export default CalendarHeader;
