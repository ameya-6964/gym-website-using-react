import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import Home from './Components/Home'
import Packages from './Components/Packages'
import './App.css';

function App()
{
  return (
      <div className='App'>
      <nav>
       <ul>
        <li> <Link to='/'> Home </Link> </li>
        <li> <Link to='/package'> Packages </Link> </li>
       </ul>
      </nav>
    <div>
    <Routes>
    <Route exact path="/" element={Home} / >
    <Route exact path="/package" element={Packages} / >
    </Routes>
    </div>
      </div>
    );
}

export default App;