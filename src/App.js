import logo from './logo.svg';
import './App.css';
import Routes from './Configures/Routes'

import Home from './Pages/Home/Components/HomeComponent';
import store from './Configures/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {Routes}
      </Provider>
      
      
    </div>
  );
}

export default App;
