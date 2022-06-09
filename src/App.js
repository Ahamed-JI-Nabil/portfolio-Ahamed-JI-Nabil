import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Shared/NavBar';

function App() {
  return (
    <div className='bg-slate-900 text-emerald-400'>
      <NavBar></NavBar>
      <Home></Home>
    </div>
  );
}

export default App;
