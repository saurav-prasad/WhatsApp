import './App.css';
import Dp from './components/DP/Dp';
import Side from './components/Side/Side';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import { useCartState } from './context/cartState';

function App() {
  const [{ appContainer }, dispatch] = useCartState()
  return (
    <div className="App">
      <div className="container" style={appContainer}>
        <Side />
        <Sidebar />
        <Chat />
      </div>
      <Dp />
    </div>
  );
}

export default App;
