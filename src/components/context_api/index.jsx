import React, { useContext } from 'react'
import { AuthProvider } from './auth-context'
import User from './user'

const DemoContext = () => {
    return (
        <AuthProvider>
            <div>
                <AuthProvider>
                    <h4>This is context api demo</h4>
                    <User />
                </AuthProvider>
            </div>
        </AuthProvider>
    )
}
export default DemoContext