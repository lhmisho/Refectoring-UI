import React, { useContext, createContext, useReducer } from 'react'
import User from '../../api/user.api'
let userContext = null;
const { Provider, Consumer } = (userContext = createContext([]));

const CREATE_USER = 'CREATE_USER'
const LOAD_USER = 'LOAD_USER'
const DELETE_USER = 'DELETE_USER'
const UPDATE_USER = 'UPDATE_USER'

const createUser = user =>({
    type: CREATE_USER,
    payload: user
})

const loadUser = (id=null) =>({
    type: LOAD_USER,
    payload: id
})

const reducer = (state, action) => {
    switch(action.type){
        case CREATE_USER: {
            User.createUser(action.payload)
                .then(user => {
                    return [...state, user]
                });
                break;
        }case LOAD_USER: {
            if(action.payload){
                User.getUserById(action.id, 3000)
                    .then(user => user)
            }else{
                User.getUsers(3000)
                    .then(users => users)
            }
            break
        }
    }
}


const UserProvider = props => {
    const [users, dispatch] = useReducer(reducer, [])
    return <Provider value={{users, dispatchUser: dispatch}}>{props.children}</Provider>
}
export {UserProvider, Consumer as UserConsumer, userContext}