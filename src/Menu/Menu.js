import './Menu.css';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutMe from './AboutMe';

function Menu(){
    return (
      <div>
         
      <nav className='navbar navbar-dark navbar-expand-sm bg-primary fixed-top' >
         <div className="container">
            <a className='navbar-brand' href='/'>Home</a>
            <div className='navbar-nav mr-auto'>  
              <div className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </div>
          <div className="nav-item">
            <Link to="/Home" className="nav-link">Comments</Link>
          </div>
          <div className="nav-item">
            <Link to="/AboutMe" className="nav-link">Contact</Link>
          </div>
        </div>
         </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Home" element={<HomePage/>}></Route>
          <Route path="/AboutMe" element={<AboutMe/>}></Route>
        </Routes>
        </div>
    )    
}

export default Menu
