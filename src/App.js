import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dp from './components/DP/Dp';
import Side from './components/Side/Side';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import { useCartState1 } from './context copy/cartState';
import { useCartState } from './context/cartState';

function App() {
  const [{ appContainer }, dispatch] = useCartState()
  const [{ chatDisplay, sideSection }, dispatch1] = useCartState1()
  return (
    <>
      <div className="App">
        <RouterProvider router={
          createBrowserRouter([
            {
              path: "/",
              element: <div className="App">
                <div className="container" style={appContainer}>
                  <Side />
                  <Sidebar />
                  <Chat />
                </div>
                <Dp />
              </div>,
            },
            {
              path: '/mobile-messages',
              element: '',
            },
          ])} />
      </div>
    </>
  );
}

export default App;
