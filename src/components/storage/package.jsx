import React from 'react'

const Package = (props) => {
    return (
        <div className={props.dynamicClass ? `flex flex-col w-full flex-wrap ${props.dynamicClass}`: 'flex flex-col w-full flex-wrap'}>
            <div className="flex flex-wrap flex-col md:flex-row mt-2">
                <div className={props.borderClass ? `flex flex-wrap bg-white ${props.borderClass} border-blue-tial-100 rounded-lg border-blue-500  md:w-full lg:w-full`: 'flex flex-wrap bg-white border-b border-blue-tial-100 rounded-lg border-blue-500  md:w-full lg:w-full'}>
                    <div className="flex w-full ">
                        <div className="flex items-center">
                            <div className="flex flex-col p-4">
                                <h3 className="font-bold text-md text-gray-700">Essential</h3>
                                <span className="font-light text-3xl">224 GB</span>
                                <div className="flex">
                                    <span className="font-bold text-md text-gray-700">$10 / mo</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-grow w-full items-center justify-end">
                            <div className="flex items-center mr-2">
                                <a href="#" className="text-lg uppercase font-semibold text-blue-400 hover:text-blue-600">Follow</a>
                                <svg className="fill-current text-blue-400 font-semibold " viewBox="0 0 24 24" width="16"
                                    height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round" className="css-i6dzq1">
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