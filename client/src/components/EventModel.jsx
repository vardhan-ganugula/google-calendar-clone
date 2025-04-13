import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpdate } from "react-icons/md";

const EventModel = ({ onClose, onSubmit }) => {
  const [selectFocused, setSelectFocused] = React.useState(false);
  const selectedDate = useSelector((state) => state.calender.selectedDate);
  

  const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
  
  return (
    <section className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0"></div>
      <div className="w-96 h-auto text-black z-10 bg-white rounded-md">
        <div className="w-full border-b-2 border-blue-500">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg p-3 relative">
              <span className="text-blue-500 absolute top-4 left-3">
                <FaPlus size={15} className="inline-block" />
              </span>
              <span className="font-mono text-2xl ml-7 text-zinc-800">
                Create New Event
              </span>
            </h2>

            <button 
              className="p-3 cursor-pointer"
              onClick={onClose}
            >
              <IoCloseSharp
                size={25}
                className="text-zinc-500 hover:text-red-500 mr-1 mt-1"
              />
            </button>
          </div>
        </div>

        <div className="w-full h-auto p-5">
          <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit && onSubmit(e);
          }}>
            <div className="flex flex-col mb-4 w-full space-y-1">
              <label htmlFor="eventTitleName">
                <h3 className="text-semibold font-medium text-zinc-800 mb-2">
                  <GoTag size={15} className="inline-block mr-2 text-black" />
                  <span className="font-semibold text-zinc-500 text-md tracking-wider">
                    Title
                  </span>
                </h3>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md border-zinc-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="eventTitleName"
                placeholder="Enter event title"
                required
              />
            </div>
            
            <div className="flex flex-col mb-4 w-full space-y-1 relative">
              <label htmlFor="eventCategoryName">
                <h3 className="text-semibold font-medium text-zinc-800 mb-2">
                  <GoTag size={15} className="inline-block mr-2 text-black" />
                  <span className="font-semibold text-zinc-500 text-md tracking-wider">
                    Category
                  </span>
                </h3>
              </label>

              <div className="relative">
                <select
                  className="w-full px-3 py-2 border rounded-md border-zinc-300 appearance-none cursor-pointer bg-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                  id="eventCategoryName"
                  onFocus={() => setSelectFocused(true)}
                  onBlur={() => setSelectFocused(false)}
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden>
                    Select a category
                  </option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                  <option value="meeting">Meeting</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  {selectFocused ? (
                    <RiArrowDropUpLine size={25} className="text-zinc-500" />
                  ) : (
                    <RiArrowDropDownLine size={25} className="text-zinc-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Start Date Field */}
            <div className="flex flex-col mb-4 w-full space-y-1">
              <label htmlFor="eventStartDate">
                <h3 className="text-semibold font-medium text-zinc-800 mb-2">
                  <CiCalendarDate size={20} className="inline-block mr-2 text-black" />
                  <span className="font-semibold text-zinc-500 text-md tracking-wider">
                    Start Date
                  </span>
                </h3>
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-md border-zinc-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="eventStartDate"
                defaultValue={formattedDate}
                required
              />
            </div>


            {/* End Date Field */}
            <div className="flex flex-col mb-4 w-full space-y-1">
              <label htmlFor="eventEndDate">
                <h3 className="text-semibold font-medium text-zinc-800 mb-2">
                  <MdOutlineUpdate size={20} className="inline-block mr-2 text-black" />
                  <span className="font-semibold text-zinc-500 text-md tracking-wider">
                    End Date
                  </span>
                </h3>
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-md border-zinc-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="eventEndDate"
                defaultValue={formattedDate}
                required
              />
            </div>

            
            <div className="flex justify-end mt-6 space-x-2">
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 border border-zinc-300 rounded-md text-zinc-700 hover:bg-zinc-100 cursor-pointer"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EventModel;