import React from 'react'
import NavBar from './nav'
import Footer from './footer'
import Board from './board'

class DashboardOne extends React.Component {

    render() {
        return (
            <>
                <div class="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
                    <NavBar />
                    <Board />
                    <Footer />
                </div>
            </>
        )
    }
}
export default DashboardOne;