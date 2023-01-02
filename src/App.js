import { Link, Route, Routes } from 'react-router-dom';
import './Styles/App.scss';
import  About  from '../src/Components/About';
import  Contact  from './Components/Contact';
import  Home  from '../src/Components/Home';
import Packages from './Components/Packages';



function App()
{
  return(
   <div>
    <nav className='navigation'>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/contact">Contact</Link> </li>
        <li> <Link to="/packages">Packages</Link> </li>
        
      </ul>
    </nav>
    <Routes>
     <Route path="/" element={ <Home /> } />
     <Route path="/about" element={ <About /> } />
     <Route path="/Contact" element={ <Contact /> } />
     <Route path="/packages" element={ <Packages /> } />
    </Routes>
   </div>
  )
}
export default App;
