import React from 'react'
import { GoHome } from "react-icons/go";

const Sidebar = ({className}) => {

  const dayColors = {
    "work": "bg-blue-100",
    "personal": "bg-green-100",
    "family": "bg-red-100",
    "other": "bg-yellow-100",
    "meeting": "bg-purple-100",
  }

  return (
    <div className={className}>

      <div className='flex items-center justify-center h-16 bg-blue-500 text-white shadow-md'>
        <h2 className='text-2xl font-bold'>Goals</h2>
      </div>

      <div className='p-5'>
          {
            dayColors && Object.keys(dayColors).map((key) => (
              <div key={key} className={`flex items-center rounded mb-2 p-2 ${dayColors[key]} `}>
                <span>
                  <GoHome size={20} />
                </span>
                <span className='ml-2 text-lg'>{key}</span>
              </div>
            ))
          }
      </div>

    </div>
  )
}

export default Sidebar