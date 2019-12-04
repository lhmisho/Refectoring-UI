import React from 'react';
import Login from './components/auth/login'
import SearchFlight from './components/flight/flight-search'

class App extends React.Component {
  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <div className="container mx-auto px-4" >
          <SearchFlight />
        </div>
      </div>
    );
  }
}

export default App;
