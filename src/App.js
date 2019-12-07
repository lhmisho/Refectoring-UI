import React from 'react';
import Login from './components/auth/login'
import SearchFlight from './components/flight/flight-search'
import BG from './static/images/bg.jpg'
import Storage from './components/storage'

class App extends React.Component {
  render() {
    return (
      <div className="bg-gray-200 bg-scroll min-h-screen">
        {/* <div className="bg-scroll min-h-screen" style={{ backgroundImage: `url(${BG})` }}>
          <div className="flex container mx-auto px-4" >
            <div className="w-full mt-20">
              <SearchFlight />
            </div>
          </div>
        </div> */}

        <div className="container mx-auto">
          <Storage/>          
        </div>
      </div>
    );
  }
}

export default App;
