import React, { useContext } from 'react'
import { AuthContext } from './auth-context'

const Navber = () => {

    const { toggleAuth, isAuthentiated } = useContext(AuthContext);
    return (
        <>
            {
                isAuthentiated ?
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAuth}>logout</button>
                    :
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAuth}>Login</button>
            }
        </>
    )
}

export default Navber