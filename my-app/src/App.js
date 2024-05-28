import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Classes from './components/Classes';
import Footer from './components/Footer';
import Header from './components/Header';
import Nabar from './components/NavBar';
import Navbar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path = '/About' element={<About/>}/>
            <Route path='/Classes'element={<Classes/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
