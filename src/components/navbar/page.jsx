import React from 'react'
import { MdOutlineNotifications } from "react-icons/md";

function Navbar() {
  return (
    <div >
      <nav className="bg-white  p-3 shadow-md ">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
           <div className='flex h-10  '>
            <img src="/images/logo.png" alt="" />
            <img src="/images/logo1.png" alt="" className='h-12'/>
           </div>
            <div className="flex items-center space-x-5">
              <a href="#" className="text-sm font-medium text-black  text-lg text-gray-700">Help Center</a>
              <a href="#" className="text-sm font-medium text-black  text-xl"><MdOutlineNotifications /></a>
              <img src="https://placehold.co/50x50" alt="" className='rounded-full'/>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
