import React, { useContext } from 'react';
import './Navbar.css';
import MMT from '../../Logo/MMTLogo.png';
import Flight from '../../Logo/flight.svg';
import Hotels from '../../Logo/hotels.svg';
import Train from '../../Logo/trn.png';
//import SignUp from '../SignUp/SignUp'
import { DataParentContext } from '../../App';

import { Link } from 'react-router-dom';
const Navbar = () => {
    const localContext = useContext(DataParentContext);
    // const { LoginDetails } = localContext;
    //console.log("shiv",localContext)
   
    return (

        <div  className='NavbarContainer'>
         
            <div className="logo">
                <Link to="">
                    <img src={MMT} alt="MMT-Logo" />
                </Link>
            </div>         
            <Link className="navlinks" to="/"><img id="dd" src={Flight} alt="Flight-logo" />Flights</Link>
            <Link className="navlinks" to="/hotels"><img src={Hotels} alt="Hotels-logo" />Hotels</Link>
            <Link className="navlinks" to="/trains"><img src= {Train} alt="Train-logo" />Trains</Link>
            {localContext.LoginDetails.length===0 && <Link className="navlinks" to="/login">Log In</Link>}
            <Link className="navlinks" to="/signUp">Sign Up</Link>
            {!localStorage.getItem('email') && !localStorage.getItem('password') (
                <><Link href="/Register">Register</Link><Link href="/Login">Login</Link></>
          
          )}




            
            <div className='DashboardPortal'>
            {localContext.LoginDetails.length>0 &&<button className='btn-btn'>{"Hi  "+localContext.LoginDetails[0].userName}</button>}
            </div>
        
           
          
            </div>

         
         
    )
       
    
}

export default Navbar

// Navbar>
//  <Nav.Item>
//             <Nav.Link href="/Register">Register</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link href="/Login">Login</Nav.Link>
//           </Nav.Item>
// </Navbar>
// I'm using local storage for the login:

// localStorage.setItem("userID", user);