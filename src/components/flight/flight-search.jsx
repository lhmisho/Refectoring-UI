import React from 'react'
import Logo from '../../static/images/logo.png'

const SearchFlight = () => {
    return (
        <div className="">
            <div className="flex mb-4">
                <div className="w-1/2">
                    <div className="w-full max-w-lg p-4 mx-auto text-3xl">
                        <img className="w-20 h-20" src={Logo} />
                    </div>
                    <div className="w-full max-w-lg p-4 mx-auto">
                        <h1 className="text-3xl">Find your best deals on flight now</h1>
                    </div>
                    <div className="w-full max-w-lg p-4 mx-auto">
                        <p>Efficiently target client-centric intellectual capital vis-a-vis leveraged experiences</p>
                    </div>
                </div>
                <div class="w-1/2">
                    <form className="w-full max-w-lg bg-white p-4 mx-auto rounded">
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Leaving from ...
                        </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Going to ...
                        </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Depart
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="Jane" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Return
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="">
                            <button className="bg-gray-900 m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SearchFlight