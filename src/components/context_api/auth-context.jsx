import React, { createContext, Component } from 'react'

let AuthContext = null
const { Provider, Consumer } = (AuthContext = createContext())

class AuthProvider extends Component {

    state = {
        user: {
            name: 'LH Misho',
            email: 'lhmisho@gmail.com',
            profession: 'Software engineer'
        },
        isAuthentiated: false
    }

    toggleAuthentication = () => {
        this.setState(prev => ({
            isAuthentiated: !prev.isAuthentiated
        }))
    }

    render() {
        return <><Provider value={{ ...this.state, toggleAuth: this.toggleAuthentication }}>{this.props.children}</Provider></>
    }
}

export {AuthProvider, Consumer as AuthConsumer, AuthContext}