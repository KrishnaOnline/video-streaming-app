import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import store from './store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import VideoPage from './components/VideoPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>,
    },
    {
      path: "watch/",
      element: <VideoPage/>
    }
  ],
}]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
