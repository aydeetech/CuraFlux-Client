import { FaRegUser } from "react-icons/fa6";
import { IoPencilSharp } from "react-icons/io5";
import { TbBriefcase2 } from "react-icons/tb";


import {
  MdBlock,
  MdDomainVerification,
  MdLockOutline,
  MdOutlineManageAccounts,
  MdOutlineMessage,
} from "react-icons/md";
import { PiCurrencyNgnFill } from "react-icons/pi";
import { LuBellRing } from "react-icons/lu";

export const BasicInfo = () => {
  return (
    <main>
      {" "}
      <section className="flex flex-col gap-5">
        {/* Personal info */}
        <section className="border w-[600px] rounded-2xl h-[350px] p-5">
          <h2 className=" font-bold flex items-center gap-3 text-xl">
            {" "}
            <span>
              {" "}
              <FaRegUser />
            </span>{" "}
            Personal Information
          </h2>
          <p className=" text-[10px] text-gray-400 font-[650] ms-8">
            You can edit and change your information here
          </p>

          <div>
            <ul className="mt-7">
              {/* name */}
              <li className=" flex items-center gap-40">
                <p className="flex gap-1 font-semibold text-xs items-center">
                  Full Name{" "}
                  <span>
                    <MdLockOutline />
                  </span>
                </p>

                <h3 className=" font-[650] text-xs">Eric Tayo</h3>
              </li>
              <hr className="my-4" />
              {/* name */}

              {/* email */}
              <li className=" flex items-center gap-40">
                <p className="flex gap-1 font-semibold text-xs items-center">
                  Email
                  <span>
                    <MdLockOutline />
                  </span>
                </p>

                <h3 className=" font-[650] text-xs">erictayo@gmail.com</h3>
              </li>
              <hr className="my-4" />
              {/* email */}

              {/* password */}
              <li className=" flex items-center gap-40">
                <p className=" font-semibold text-xs items-center">Password</p>

                <h3 className=" font-[650] text-xs text-gray-400 ms-10">
                  • • • • • • • •
                </h3>

                <button className="text-[#215297]">
                  <IoPencilSharp />
                </button>
              </li>
              <hr className="my-4" />
              {/* password */}

              {/* Date of birth */}
              <li className=" flex items-center gap-40">
                <p className="flex gap-1 font-semibold text-xs items-center">
                  Date of birth
                  <span>
                    <MdLockOutline />
                  </span>
                </p>

                <h3 className=" font-[650] text-xs">1998-02-28</h3>
              </li>
              <hr className="my-4" />
              {/* Date of birth */}

              {/* Phone Number */}
              <li className=" flex items-center gap-40">
                <p className="flex gap-1 font-semibold text-xs items-center">
                  Phone Number
                  <span>
                    <MdLockOutline />
                  </span>
                </p>

                <h3 className=" font-[650] text-xs">(812) 3425-3476</h3>
              </li>
              <hr className="my-4" />
              {/* Phone Number */}
            </ul>
          </div>
        </section>
        {/* Personal info */}

        {/* work history */}
        <section className="border w-[600px] rounded-2xl h-[250px] p-5">
          <h2 className=" font-bold flex items-center gap-3 text-xl">
            {" "}
            <span>
              {" "}
              <TbBriefcase2 />
            </span>{" "}
            Work History
          </h2>
          <p className=" text-[10px] text-gray-400 font-[650] ms-8">
            You can edit and change your information here
          </p>

          <div>
            <ul className="mt-7">
              {/* Current Employer */}
              <li className=" flex items-center gap-32">
                <p className=" font-semibold text-xs items-center">
                  Current Employer
                </p>

                <h3 className=" font-[650] text-xs text-gray-400 ms-5 whitespace-nowrap">
                  Lagos State Hospital
                </h3>

                <button className="text-[#215297]">
                  <IoPencilSharp />
                </button>
              </li>
              <hr className="my-4" />
              {/* Current Employer */}

              {/* Department */}
              <li className=" flex items-center gap-32">
                <p className=" font-semibold text-xs items-center">
                  Department
                </p>

                <h3 className=" font-[650] text-xs text-gray-400 ms-5 whitespace-nowrap">
                  Emergency
                </h3>

                <button className="text-[#215297]">
                  <IoPencilSharp />
                </button>
              </li>
              <hr className="my-4" />
              {/* Department */}

              {/* Years in practice */}
              <li className=" flex items-center gap-32">
                <p className=" font-semibold text-xs items-center">
                  Years in practice
                </p>

                <h3 className=" font-[650] text-xs text-gray-400 ms-5 whitespace-nowrap">
                  6 years
                </h3>

                <button className="text-[#215297]">
                  <IoPencilSharp />
                </button>
              </li>
              <hr className="my-4" />
              {/* Years in practice */}
            </ul>
          </div>
        </section>
        {/* work history */}

        {/* account access */}
        <section className="border w-[600px] rounded-2xl h-[240px] p-5">
          <h2 className=" font-bold flex items-center gap-3 text-xl">
            {" "}
            <span>
              {" "}
              <MdOutlineManageAccounts />
            </span>{" "}
            Account Access
          </h2>
          <p className=" text-[10px] text-gray-400 font-[650] ms-8">
            You can edit and change your information here
          </p>

          <div>
            <ul className="mt-7">
              {/*Delete my account */}
              <li className=" flex items-center gap-32">
                <div>
                  <h3 className=" font-[650] text-xs text-gray-400 mb-1 whitespace-nowrap">
                    Delete my account
                  </h3>

                  <p className=" font-semibold text-xs text-gray-400 items-center">
                    This action is permanent and can’t be undone
                  </p>
                </div>

                <button className="text-white bg-red-600 px-5 py-2 rounded-full font-[650]">
                  Delete Account
                </button>
              </li>
              <hr className="my-4" />
              {/*Delete my account */}

              {/*Deactivate my account */}
              <li className=" flex items-center gap-28">
                <div>
                  <h3 className=" font-[650] text-xs text-gray-400 mb-1 whitespace-nowrap">
                    Deactivate my account
                  </h3>

                  <p className=" font-semibold text-xs text-gray-400 items-center">
                    This account is temporary and be undone
                  </p>
                </div>

                <button className="border px-5 py-2 rounded-full font-[650]">
                  Deactivate Account
                </button>
              </li>
              <hr className="my-4" />
              {/*Deactivate my account */}
            </ul>
          </div>
        </section>
        {/* account access */}
      </section>
    </main>
  );
};
