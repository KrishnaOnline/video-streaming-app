import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import store from './store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import VideoPage from './components/VideoPage';
import SearchResults from './components/SearchResults';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <><Header/><Body/></>,
  children: [
    {
      path: "/",
      element: <MainContainer/>,
    },
    {
      path: "watch/:id",
      element: <VideoPage/>
    },
    {
      path: "search/:resID",
      element: <SearchResults/>
    }
  ],
}]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
