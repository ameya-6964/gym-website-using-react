import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import  Courses  from '../src/Components/Courses';
import  FSD  from '../src/Components/FSD';
import  Home  from '../src/Components/Home';
import Java from './Components/Java';
import Python from './Components/Python';


function App()
{
  return(
   <div>
    <nav className='navigation'>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/course">Courses</Link> </li>
        <li> <Link to="/fsd">FSD</Link> </li>
        <li> <Link to="/java">Java</Link> </li>
        <li> <Link to="/python">Python</Link> </li>
      </ul>
    </nav>
    <Routes>
     <Route path="/" element={ <Home /> } />
     <Route path="/course" element={ <Courses /> } />
     <Route path="/fsd" element={ <FSD /> } />
     <Route path="/java" element={ <Java /> } />
     <Route path="/python" element={ <Python /> } />
    </Routes>
   </div>
  )
}
export default App;
