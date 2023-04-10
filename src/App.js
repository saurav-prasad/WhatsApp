import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dp from './components/DP/Dp';
import Side from './components/Side/Side';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import { useCartState } from './context/cartState';
import Login from './components/login/Login';
import { useLoginState } from './components/loginContext/loginState';


function App() {
  const [{ appContainer }, dispatch] = useCartState()
  const [{ user }, Logindispatch] = useLoginState();

  return !user ? (<Login />) : (
    <>
      <div className="App">
        <RouterProvider router={
          createBrowserRouter([
            {
              path: "/",
              element:
                <div className="container" style={appContainer}>
                  <Side />
                  <Sidebar />
                  <Chat />
                </div>
              ,
            },
            {
              path: "/room/:roomId",
              element:
                <div className="container" style={appContainer}>
                  <Side />
                  <Sidebar />
                  <Chat />
                </div>
              ,
            },
          ])} />
        <Dp />
      </div>
    </>
  );
}

export default App;
