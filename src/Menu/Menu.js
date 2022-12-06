import './Menu.css';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
function Menu(){
    return (
      <div>
         
      <nav className='navbar navbar-dark navbar-expand-sm fixed-top' style={{background: '#596E76'}} >
         <div className="container">
            <a className='navbar-brand' href='/'>Home</a>
            <div className='navbar-nav mr-auto'>  
              <div className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </div>
          <div className="nav-item">
            <Link to="/Home" className="nav-link">About Me</Link>
          </div>
          <div className="nav-item">
            <Link to="/AboutMe" className="nav-link">Contact</Link>
          </div>
        </div>
         </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Home" element={<AboutMe/>}></Route>
          <Route path="/AboutMe" element={<ContactMe/>}></Route>
        </Routes>
        </div>
    )    
}

export default Menu
