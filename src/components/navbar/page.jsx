import Link from 'next/link';
import React from 'react'
import { MdOutlineNotifications } from "react-icons/md";

function Navbar() {
  return (
    <div className="bg-white  py-3 shadow-md  ">
      <nav className="w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          <Link className="flex h-10 " href={"/"}>
            <img src="/images/logo.png" alt="" />
            <img src="/images/logo1.png" alt="" className="h-12" />
          </Link>
          <div className="flex items-center space-x-5">
            <a
              href="#"
              className="text-sm font-medium text-black  text-lg text-gray-700"
            >
              Help Center
            </a>
            <a href="#" className="text-sm font-medium text-black  text-xl">
              <MdOutlineNotifications />
            </a>
            <img
              src="https://placehold.co/50x50"
              alt=""
              className="rounded-full"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
