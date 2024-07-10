import logo from './logo.svg';
import './App.css';
import Routes from './Configures/Routes'
import store from './Configures/store';
import { Provider } from 'react-redux';
import { useState } from 'react';
import { UserContext } from './Context/UserContext/UserContext';

const App = () => {
  const[userDetails, setUserDetails] = useState({})
  return (
    <div className="App">
        <Provider store={store}>
          <UserContext.Provider value={{ userDetails, setUserDetails }}>
          {Routes}
          </UserContext.Provider>
        </Provider>
    </div>
  );
}

export default App;
