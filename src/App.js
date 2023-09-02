import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import store from './store/store';
import { createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>
}]);

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
