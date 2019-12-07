import React from 'react'
import Logo from '../../static/images/logo.png'

const SearchFlight = () => {
    return (
        <div className="md:flex lg:flex xl:flex mb-4">
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
                    <div className="shadow-2xl rounded-full w-16 h-16 flex items-center justify-center mb-10 ml-16">
                        <img className="rounded-full w-16 h-16" src="https://image.flaticon.com/icons/svg/201/201623.svg" />
                    </div>
                    <div className="w-full max-w-lg p-4 mx-auto mb-10">
                        <h1 className="text-3xl font-bold">Find your best deals on flight now</h1>
                    </div>
                    <div className="w-full max-w-lg p-4 mx-auto">
                        <div className="mb-2">
                            <img src="https://image.flaticon.com/icons/svg/1218/1218439.svg" className="flex-1 float-left w-5 h-5" />
                            <img src="https://image.flaticon.com/icons/svg/1218/1218439.svg" className="flex-1 float-left w-5 h-5" />
                            <img src="https://image.flaticon.com/icons/svg/1218/1218439.svg" className="flex-1 float-left w-5 h-5" />
                            <img src="https://image.flaticon.com/icons/svg/1218/1218439.svg" className="flex-1 float-left w-5 h-5" />
                            <img src="https://image.flaticon.com/icons/svg/1218/1218439.svg" className="flex-1 w-5 h-5" />
                        </div>
                        <p>Our customer rate us 4.5 out of 5 star based on 3200+ reviews</p>
                    </div>
                </div>
                <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
                    <form className="w-full justify-end  max-w-lg bg-white p-4 rounded shadow-lg">
                        <div className="ml-2 my-2">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio text-indigo-600 h-4 w-4" name="radio-colors" value="1" checked />
                                <span className="ml-2">Option 1</span>
                            </label>
                            <label className="inline-flex items-center ml-2">
                                <input type="radio" class="form-radio text-green-500" name="radio-colors" value="2" />
                                <span className="ml-2">Option 2</span>
                            </label>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="relative w-full">
                                {/* <div className="pointer-events-none absolute inset-y-0 p-3 pl-0 left-0 flex items-start px-2 text-gray-700">
                                    <img src="https://image.flaticon.com/icons/svg/67/67347.svg" className="flex-1 float-left w-5 h-5" />
                                </div> */}
                                <div className="w-full px-3">
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 placeholder-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="text"
                                        placeholder="Leaving from ..." />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="relative w-full">
                                {/* <div className="pointer-events-none absolute inset-y-0 p-3 pl-0 left-0 flex items-start px-2 text-gray-700">
                                    <img src="https://image.flaticon.com/icons/svg/67/67347.svg" className="flex-1 float-left w-5 h-5" />
                                </div> */}
                                <div className="w-full px-3">
                                    <input className="appearance-none block w-full bg-gray-200 placeholder-black text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Going to .." />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="relative md:w-1/2">
                                {/* <div class="pointer-events-none absolute inset-y-0 p-3 pl-0 left-0 flex items-start px-2 text-gray-700">
                                    <img src="https://image.flaticon.com/icons/svg/42/42446.svg" className="flex-1 float-left w-5 h-5" />
                                </div> */}
                                <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                    <input placeholder="Depart" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="Jane" />
                                </div>
                            </div>
                            <div className="relative  md:w-1/2">
                                {/* <div className="pointer-events-none absolute inset-y-0 p-3 pl-0 left-0 flex items-start px-2 text-gray-700">
                                    <img src="https://image.flaticon.com/icons/svg/42/42446.svg" className="flex-1 float-left w-5 h-5" />
                                </div> */}
                                <div className="w-full md:w-full px-3">
                                    <input placeholder="Return" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="Doe" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <div className="relative">
                                    {/* <div className="pointer-events-none absolute inset-y-0 p-3 pl-0 left-0 flex items-start px-2 text-gray-700">
                                        <img src="https://image.flaticon.com/icons/svg/747/747376.svg" className="flex-1 float-left w-5 h-5" />
                                    </div> */}
                                    <select className="block form-select appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>2 passengers</option>
                                        <option>4 passengers</option>
                                        <option>6 passengers</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <div className="relative">
                                    {/* <div className="pointer-events-none absolute inset-y-0 p-3 pl-0 left-0 flex items-start px-2 text-gray-700">
                                        <img src="https://image.flaticon.com/icons/svg/747/747376.svg" className="flex-1 float-left w-5 h-5" />
                                    </div> */}
                                    <select className="block form-select appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>Economic class</option>
                                        <option>Business class</option>
                                        <option>Science class</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-gray-900 m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}
export default SearchFlight