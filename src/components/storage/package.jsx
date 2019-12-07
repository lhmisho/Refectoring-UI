import React from 'react'

const Package = (props) => {
    return (
        <div class="flex flex-col w-full flex-wrap mt-12">
            <div class="flex flex-wrap flex-col md:flex-row mt-2">
                <div class="flex flex-wrap bg-white border-b border-blue-tial-100 rounded-lg border-gray-400 md:w-full lg:w-full">
                    <div class="flex w-full m-4">
                        <div class="flex items-center">
                            <img class="h-20 w-24"
                                src="https://images.unsplash.com/photo-1453847350175-b971869973d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
                            <div class="flex flex-col p-4">
                                <h3 class="font-bold text-md text-tial-400">Company Name</h3>
                                <span class="font-light text-sm">224k followers</span>
                                <div class="flex">
                                    <svg class="mr-1" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor"
                                        stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                        class="css-i6dzq1">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg>
                                    <svg class="mr-1" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor"
                                        stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                        class="css-i6dzq1">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg>
                                    <svg class="mr-1" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor"
                                        stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                        class="css-i6dzq1">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-1 flex-grow w-full items-center justify-end">
                            <div class="flex items-center mr-2">
                                <a href="#" class="text-lg uppercase font-semibold text-blue-400 hover:text-blue-600">Follow</a>
                                <svg class="fill-current text-blue-400 font-semibold " viewBox="0 0 24 24" width="16"
                                    height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round" class="css-i6dzq1">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Package