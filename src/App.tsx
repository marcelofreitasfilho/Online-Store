import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" /> */}
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shopping-cart" element={ <ShoppingCart /> } />

      </Routes>

    </div>
  );
}

export default App;
