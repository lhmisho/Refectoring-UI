import React, { useContext } from 'react'
import { AuthContext } from './auth-context'

const Profile = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Name: {user.email}</p>
        </div>
    )
}

export default Profile;