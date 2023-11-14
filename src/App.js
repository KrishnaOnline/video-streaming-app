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
      element: <div className='mx-auto'><VideoPage/></div>
    },
    {
      path: "search/:resID",
      element: <SearchResults/>
    }
  ],
}]);

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Provider store={store}>
        <div className="App max-w-[1280px] mx-auto">
          <RouterProvider router={appRouter}/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
