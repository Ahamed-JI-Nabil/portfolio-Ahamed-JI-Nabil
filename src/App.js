import './App.css';
import { Routes, Route } from "react-router-dom";

import "swiper/css/bundle";

import Home from './components/Home/Home';
import NavBar from './components/Shared/NavBar';

function App() {
  return (
    <div className='bg-slate-900 text-emerald-400'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
