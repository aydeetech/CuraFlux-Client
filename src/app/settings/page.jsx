"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";
import { TbBriefcase2 } from "react-icons/tb";
import "./settings.css";

import {
  MdBlock,
  MdDomainVerification,
  MdLockOutline,
  MdOutlineManageAccounts,
  MdOutlineMessage,
} from "react-icons/md";
import { PiCurrencyNgnFill } from "react-icons/pi";
import { LuBellRing } from "react-icons/lu";
import { BasicInfo } from "@/components/settings/BasicInfo";
import { Verification } from "@/components/settings/Verification";

const Settings = () => {
  const [showAccount, setShowAccount] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  //   profile states
  const [showBasicInfo, setShowBasicInfo] = useState(true);
  const [showVerification, setShowVerification] = useState(false);

  //   profile states

  // profile states Function
  const handleShowBasicInfo = () => {
    setShowBasicInfo(true);
    setShowVerification(false);
  };

  const handleShowVerification = () => {
    setShowBasicInfo(false);
    setShowVerification(true);
  };

  // profile states Function

  const handleShowAccount = () => {
    setShowAccount(true);
    setShowProfile(false);
  };

  const handleShowProfile = () => {
    setShowAccount(false);
    setShowProfile(true);
  };

  return (
    <main className=" mb-10">
      <section className="mt-10  w-10/12 mx-auto">
        <h1 className="font-bold text-3xl">Settings</h1>

        <div className="flex gap-16 text-sm mt-7">
          <button onClick={handleShowAccount} className="font-bold nav_tab">
            Account
          </button>
          <button onClick={handleShowProfile} className={`font-bold nav_tab border-b-2`}>
            Profile
          </button>
        </div>
      </section>

      <section className="bg-gray-50 border-t">
        <section className="flex gap-16 text-sm mt-7  w-10/12 mx-auto">
          {showAccount && (
            <section className="flex gap-6">
              {/* account */}
              <div className="border w-68 rounded-2xl h-[600px] p-5">
                {/* update photo */}

                <div className="flex items-center gap-3">
                  <Image
                    src={"/images/docProfile.png"}
                    width={"70"}
                    height={"70"}
                    className=" rounded-full"
                    alt="Doctor Profile Pic"
                  />

                  <div>
                    <p className="text-xs text-[#6B8CBA]">
                      Ensure your face is visible
                    </p>
                    <button className=" border-2 px-4 py-1 w-full mt-1 rounded-full font-semibold text-xs">
                      Update Photo
                    </button>
                  </div>
                </div>
                {/* update photo */}
                <hr className="my-3" />

                {/* Account */}
                <div>
                  <p className=" text-[11px] font-semibold text-gray-400">
                    Account
                  </p>

                  <div className="mt-3">
                    <ul className=" space-y-4">
                      <li
                        className={`flex items-center gap-3 cursor-pointer active:bg-gray-200 px-3 p-1 font-bold rounded-full ${
                          showBasicInfo && "bg-gray-200"
                        }`}
                        onClick={handleShowBasicInfo}
                      >
                        <span>
                          <FaRegUser />
                        </span>
                        Basic Information
                      </li>
                      <li
                        className={`flex items-center gap-3 cursor-pointer active:bg-gray-200 px-3 p-1 font-bold rounded-full ${
                          showVerification && "bg-gray-200"
                        }`}
                        onClick={handleShowVerification}
                      >
                        <span>
                          <MdDomainVerification />
                        </span>
                        Verification
                        <span className=" text-[9px] bg-[#FFF6ED] px-2 py-0.5 text-red-600 ms-7">
                          New Update
                        </span>
                      </li>
                      <li className="flex items-center gap-3 cursor-pointer active:bg-gray-200 px-3 p-1 font-bold rounded-full">
                        <span>
                          <MdLockOutline />
                        </span>
                        Security
                      </li>
                      <li className="flex items-center gap-3 cursor-pointer active:bg-gray-200 px-3 p-1 font-bold rounded-full">
                        <span>
                          <MdBlock />
                        </span>
                        Blacklist
                      </li>
                    </ul>
                    {/* Account */}

                    {/* financial */}
                    <div className="my-7">
                      <p className=" text-[11px] font-semibold text-gray-400">
                        FINANCIAL
                      </p>

                      <ul className=" space-y-4 mt-3">
                        <li className="flex items-center gap-3 cursor-pointer active:bg-gray-200 px-3 p-1 font-bold rounded-full">
                          <span>
                            <PiCurrencyNgnFill />
                          </span>
                          Payment Info
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer active:bg-gray-200 px-3 p-1 font-bold rounded-full">
                          <span>
                            <FaRegUser />
                          </span>
                          Billing and Subscription
                        </li>
                      </ul>
                    </div>
                    {/* financial */}

                    {/* communications */}
                    <div className="my-7">
                      <p className=" text-[11px] font-semibold text-gray-400">
                        COMMUNICATION
                      </p>

                      <ul className=" space-y-4 mt-3">
                        <li className="flex items-center gap-3 cursor-pointer active:bg-gray-200 px-3 p-1 font-bold rounded-full">
                          <span>
                            <MdOutlineMessage />
                          </span>
                          Messages
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer active:bg-gray-200 px-3 p-1 font-bold rounded-full">
                          <span>
                            <LuBellRing />
                          </span>
                          Notification
                        </li>
                      </ul>
                    </div>
                    {/* communications */}
                  </div>
                </div>
              </div>

              {/* personal info, work history, account access */}
              {showBasicInfo && <BasicInfo />}
              {/* personal info, work history, account access */}

              {/* Verification */}
              {showVerification && <Verification />}
              {/* Verification */}
            </section>
          )}
          {showProfile && <div>{/* profile */} profile</div>}
        </section>
      </section>
    </main>
  );
};

export default Settings;
