import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Tips from './pages/Tips';
import Travel from './pages/Travel';
import TravelDetail from './pages/TravelDetail'

function App() {
  return (
    <div className="wrap">
      <Navbar/>

      <main className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/travel' element={<Travel/>}/>
          <Route path='/travel/:id' element={<TravelDetail/>}/>
          <Route path='/tips' element={<Tips/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>

      <footer className='site-footer'>
        <small>&copy; {new Date().getFullYear()} wandermate</small>
      </footer>
    </div>
  );
}

export default App;
