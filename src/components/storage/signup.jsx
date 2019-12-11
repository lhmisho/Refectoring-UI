import React, { Component } from 'react'

class Signup extends Component {
    render() {
        return (
            <div className="leading-loose">
                <form className="max-w-xl m-4 p-10 rounded">
                    <div className="mb-6">
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="cus_name" name="cus_name" type="text" required="" placeholder="Full name" aria-label="Name" />
                    </div>
                    <div className="mb-6">
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="cus_email" name="cus_email" type="text" required="" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="cus_email" name="cus_email" type="password" required="" placeholder="Pasword" aria-label="Name" />
                    </div>
                    <div class="mb-6">
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
                    </div>
                    <div class="mb-6">
                        <button className="w-full px-4 py-1 text-white font-bold tracking-wider bg-blue-500 rounded" type="submit">Create account</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup