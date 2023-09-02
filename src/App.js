import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <MainContainer/>
      </div>
    </Provider>
  );
}

export default App;
