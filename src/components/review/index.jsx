import React from 'react'


const Review = () => {
    return (
        <div class="flex max-w-sm w-10/12 mx-auto justify-center lg:max-w-full lg:flex bg-white shadow-lg rounded-lg border-b-2 border-green-500 h-64 my-64">
            <div class="flex w-1/8 h-auto justify-end mt-20">
                <div class="inline-block rounded bg-gray-300 h-12">
                    <img class="rounded float-left h-full" src="https://randomuser.me/api/portraits/women/34.jpg" />
                </div>
            </div>
            <div class="flex w-3/4 bg-gray-500 h-auto mt-12">
                <form action="" className=" bg-white w-full">
                    <div className="pb-4 lg:px-4">
                        <label htmlFor="email" className="text-sm block font-bold  pb-2">Post your comment here</label>
                        <textarea name="email" id="" className="shadow appearance-none border rounded h-24 w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline shadow-inner" placeholder="Johnbull@example.com" />
                    </div>
                    <div className="pb-4 lg:px-4">
                        <button class="bg-transparent w-1/4  float-right hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Post comment
                        </button>
                        <div class="flex items-center justify-center">
                            <div class="m-3">
                                <button class="bg-white text-gray-800 font-bold rounded-full border-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span class="mr-2">Send</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                    </svg>
                                </button>
                            </div>

                            <div class="m-3">
                                <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span class="mr-2">Close</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                                    </svg>
                                </button>
                            </div>

                            <div class="m-3">
                                <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span class="mr-2">Wait</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentcolor" d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Review