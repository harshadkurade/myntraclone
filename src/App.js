
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes} from "react-router-dom";
import Cart from './Pages/Cart';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <div className='bg-slate-900'>
        <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
