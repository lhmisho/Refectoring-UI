import React from 'react';
// import Login from './components/auth/login'
// import SearchFlight from './components/flight/flight-search'
// import BG from './static/images/bg.jpg'
// import Storage from './components/storage'
// import Review from './components/review'
// import DashboardTwo from './components/dashboard/dashboardTwo/dashboard'
// import MyHooks from './components/hooks/indexa'
// import MyReducer from './components/useReducer'
// import HooksAndContext from './components/hooks_and_context'
// import { UserProvider } from './components/hooks_and_context/user_context'
// import DemoContextApi from './components/context_api'
// import Hooks from './components/hooks/test'
// import Posts from './components/hooks/posts'
import Posts from './components/hooks/indexa'
// import TestReducer from './components/my_reducer'
import NewReducer from './components/my_reducer/post'
import HOC from './components/hoc/index'
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

        {/* <div className="container mx-auto">
          <Storage/>          
        </div> */}
        {/* <div className="flex container mx-auto">
          <Review />
        </div> */}
        <div>
          {/* <DashboardTwo /> */}
        </div>
        {/* <MyHooks /> */}
        {/* <MyReducer /> */}
        {/* <UserProvider>
          <HooksAndContext />
        </UserProvider> */}
        {/* <DemoContextApi /> */}
         <Posts />
        {/*<TestReducer />*/}
        {/* <NewReducer/> */}
        {/* <HOC /> */}
      </div>
    );
  }
}

export default App;
