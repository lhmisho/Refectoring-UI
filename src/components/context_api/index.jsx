import React, { createContext } from 'react'

const Profile = (props) => {
    return (
        <authContext.Consumer>
            {({ user }) => (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Name: {user.email}</p>
                </div>
            )}
        </authContext.Consumer>
    )
}

const Navber = (props) => {
    /**
     * context api style
     */
    return (
        <authContext.Consumer>
            {({ toggleAuth, isAuthentiated }) => (
                <>
                    {
                        isAuthentiated ?
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAuth}>logout</button>
                            :
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleAuth}>Login</button>
                    }
                </>
            )}
        </authContext.Consumer>
    )

    /**
     * state lifting way
     */
    // if (props.isAuthentiated) {
    //     return (
    //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.toggleAuthentication}>logout</button>
    //     )
    // } else {
    //     return (
    //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.toggleAuthentication}>Login</button>
    //     )
    // }
}


const User = props => {
    return (
        <authContext.Consumer>
            {value => (
                <div>
                    <Navber />
                    {value.isAuthentiated ? <Profile /> : <p>Please login</p>}
                </div>
            )}
        </authContext.Consumer>
    )
}


const authContext = createContext({
    user: {
        name: 'LH Misho',
        email: 'lhmisho@gmail.com',
        profession: 'Software engineer'
    },
    isAuthentiated: false
})

/**
 * main component
 */
class DemoContext extends React.Component {
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
        console.log(authContext)
        const { isAuthentiated, user } = this.state
        return (
            <div>
                <authContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuthentication }}>
                    <h4>This is context api demo</h4>
                    {/* <User isAuthentiated={isAuthentiated} user={user} toggleAuthentication={this.toggleAuthentication} /> */}
                    <User toggleAuthentication={this.toggleAuthentication} />
                </authContext.Provider>
            </div>
        )
    }
}

export default DemoContext