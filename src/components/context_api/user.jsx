import React, { useContext } from 'react'
import { AuthContext } from './auth-context'
import Navbar from './navbar'
import Profile from './profile'

const User = props => {
    /**
     * useing use context
     */
    const { isAuthentiated } = useContext(AuthContext);
    return (
        <>
            <div>
                <Navbar />
                {isAuthentiated ? <Profile /> : <p>Please login</p>}
            </div>
        </>
    )
}

export default User

