import React from 'react'

const Board = () => {
    return (
        <div className="flex-grow w-full mx-auto sm:px-4 pt-6 pb-8">
            <div className="flex">
                <div className="w-1/2 h-auto text-lg">
                    <div className="text-gray-900 px-2 py-2">
                        Overview
                    </div>
                </div>
                <div className="w-1/2 h-auto">
                    <div className="text-gray-900 px-2 py-2 text-right">
                        Sat Dec 14 2019 13:02:38
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 lg:rounded-lg border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
                <div className="border-b px-6">
                    <div className="flex justify-between -mb-px">
                        <div className="lg:hidden text-indigo-200 py-4 text-lg">
                            Price Charts
                        </div>
                        <div className="hidden lg:flex">
                            <button type="button" className="appearance-none py-4 text-indigo-200 border-b border-blue-600 mr-6">
                                Bitcoin &middot; CA$21,404.74
                                            </button>
                            <button type="button" className="appearance-none py-4 text-indigo-200 border-b border-transparent hover:border-gray-600 mr-6">
                                Ethereum &middot; CA$884.80
                            </button>
                            <button type="button" className="appearance-none py-4 text-indigo-200 border-b border-transparent hover:border-gray-600">
                                Litecoin &middot; CA$358.24
                            </button>
                        </div>
                        <div className="flex text-sm">
                            <button type="button" className="appearance-none py-4 text-indigo-200 border-b border-transparent hover:border-gray-600 mr-3">
                                1M
                            </button>
                            <button type="button" className="appearance-none py-4 text-indigo-200 border-b border-transparent hover:border-gray-600 mr-3">
                                1D
                            </button>
                            <button type="button" className="appearance-none py-4 text-indigo-200 border-b border-transparent hover:border-gray-600 mr-3">
                                1W
                            </button>
                            <button type="button" className="appearance-none py-4 text-indigo-200 border-b border-blue-600 mr-3">
                                1M
                            </button>
                            <button type="button" className="appearance-none py-4 text-indigo-200 border-b border-transparent hover:border-gray-600 mr-3">
                                1Y
                            </button>
                            <button type="button" className="appearance-none py-4 text-indigo-200 border-b border-transparent hover:border-gray-600">
                                ALL
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center px-6 lg:hidden">
                    <div className="flex-grow flex-no-shrink py-6">
                        <div className="text-gray-600 mb-2">
                            <span className="text-3xl align-top">CA$</span>
                            <span className="text-5xl">21,404</span>
                            <span className="text-3xl align-top">.74</span>
                        </div>
                        <div className="text-green-light text-sm">
                            &uarr; CA$12,955.35 (154.16%)
                        </div>
                    </div>
                    <div className="flex-shrink w-32 inline-block relative">
                        <select className="block appearance-none w-full bg-white border border-grey-light px-4 py-2 pr-8 rounded">
                            <option>BTC</option>
                            <option>ETH</option>
                            <option>LTC</option>
                        </select>
                        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <div className="w-1/3 text-center py-8">
                        <div className="border-r text-left px-4">
                            <div className="mb-2">
                                <div className="text-lg text-indigo-200">
                                    Total balance
                                </div>
                                <div className="text-indigo-200 text-4xl">
                                    $21,404
                                </div>
                            </div>
                            <div className="text-lg uppercase text-indigo-200 tracking-wide">
                                Bitcoin Price
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 text-center py-8">
                        <div className="border-r text-left px-4">
                            <div className="mb-2">
                                <div className="text-lg text-indigo-200">
                                    Total balance
                                </div>
                                <div className="text-indigo-200 text-4xl">
                                    $21,404
                                </div>
                            </div>
                            <div className="text-lg uppercase text-indigo-200">
                                Bitcoin Price
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 text-center py-8">
                        <div className="border-r text-left px-4">
                            <div className="mb-2">
                                <div className="text-lg text-indigo-200">
                                    Total balance
                                </div>
                                <div className="text-indigo-200 text-4xl">
                                    $21,404
                                </div>
                            </div>
                            <div className="text-lg uppercase text-indigo-200 tracking-wide">
                                Bitcoin Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Board