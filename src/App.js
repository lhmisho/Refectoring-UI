import React from 'react';
import Login from './components/auth/login'
import SearchFlight from './components/flight/flight-search'
import BG from './static/images/bg.jpg'

class App extends React.Component {
  render() {
    return (
      <div className="bg-scroll min-h-screen" style={{backgroundImage: `url(${BG})`}}>
        <div className="container mx-auto px-4" >
          <SearchFlight />
        </div>
      </div>
    );
  }
}

export default App;
