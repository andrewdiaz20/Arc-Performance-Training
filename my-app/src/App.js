import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Nabar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path = '/About' element={<About/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
