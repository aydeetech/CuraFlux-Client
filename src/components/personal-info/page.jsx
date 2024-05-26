import React from 'react'
import Navbar from '../navbar/page'

function PersonalInformation() {
    return (
        <>
            <Navbar/>
            <div className="flex justify-center items-center flex-col md:flex-row gap-10 p-16 bg-zinc-50  dark:bg-black ">
                <div className="flex justify-center items-center w-full md:w-auto  ">
                    <img src="/images/Home-Img.png" alt="Home Image" className=' mx-auto '/>
                </div>
                <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-300 dark:border-zinc-700 w-full md:max-w-md mx-auto ">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">Step 1 of 4</div>
                        <div className="text-right text-sm text-zinc-500 dark:text-zinc-300 italic">"Outstanding Service, I love CuraFlux"</div>
                    </div>
                    <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">Please fill in the fields below</p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Title *</label>
                            <select id="title" name="title" className="mt-1 block w-full rounded-3xl border border-gray-300 dark:border-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 rounded-2xl">
                                <option>Mr.</option>
                            </select>
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="dob" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 ">Date of birth</label>
                                <input type="text" id="dob" name="dob" placeholder="dd/mm/yyyy" className="mt-1 block w-full rounded-2xl border-zinc-300 dark:border-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 rounded-3xl  border border-gray-300" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="gender" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Gender</label>
                                <select id="gender" name="gender" className="mt-1 block w-full rounded-3xl border-zinc-300 dark:border-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2  border border-gray-300">
                                    <option>Select...</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Location</label>
                            <input type="text" id="location" name="location" placeholder="Lagos, Nigeria" className="mt-1 block w-full rounded-3xl border-zinc-300 dark:border-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2  border border-gray-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Phone Number</label>
                            <div className="flex gap-2">
                                <select id="phone-code" name="phone-code" className="mt-1 block w-1/4 rounded-3xl border-zinc-300 dark:border-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2  border border-gray-300 ">
                                    <option>NG</option>
                                </select>
                                <input type="text" id="phone" name="phone" placeholder="+234 (555) 000-0000" className="mt-1 block w-full rounded-3xl border-zinc-300 dark:border-zinc-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2  border border-gray-300" />
                            </div>
                        </div>
                        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white dark:bg-indigo-600 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm">Next</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PersonalInformation
