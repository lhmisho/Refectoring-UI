import React, { useState, useEffect, useContext } from 'react'
import { UserProvider, userContext} from './user_context'
import User from '../../api/user.api'

const HooksAndContext = () => {
    // const [users, setUsers] = useState([])
    const value = useContext(userContext)
    const { users, dispatchUser} = useContext(userContext);
    // useEffect(() => {
    //     User.getUsers(5000).then(data => {
    //         setUsers(data)
    //     })
    // }, [])
    console.log(value)
    return (
        <div>
            <p>Hooks and Context</p>
            {users && users.length > 0 ? users.map(user => (<li key={user.id}>{user.name}</li>)) : 'No data'}
        </div>
    )
}
export default HooksAndContext