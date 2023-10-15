import React, { useContext, } from 'react';
import './Navbar.css';
import MMT from '../../Logo/MMTLogo.png';
import Flight from '../../Logo/flight.svg';
import Hotels from '../../Logo/hotels.svg';
import Train from '../../Logo/trn.png';
import {naveDropdown} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { DataParentContext } from '../../App';

import { Link } from 'react-router-dom';
const Navbar = () => {
    const localContext = useContext(DataParentContext);
    const navigate = useNavigate();
    
    const localData = JSON.parse(localStorage.getItem("user") || null);
    // const { LoginDetails } = localContext;
    // console.log("shiv",localContext)
    function handleuser(x){
        if( localData === null){
          localStorage.removeItem(localContext.LoginDetails[0].userName);
          localStorage.clear();
          x.disable=true;
          navigate("/")  
          
        }
        //      else if( localData !== null){
          
        //   localStorage.removeItem("user");
      
        //               navigate("/")  
        // }
        
      }
  
      // function disable (x){
      //   x.disabled=true;
      // }
      // function disable (x){
      //   x.disable = true;
      // }

 
  console.log(localStorage);
    return (

        <div  className='NavbarContainer'>         
           
            <div className="logo">
                <Link to="">
                    <img src={MMT} alt="MMT-Logo" />
                </Link>
            </div>


{localContext.LoginDetails.length===0 && <Link className="navlinks" to="/"><img id="dd" src={Flight} alt="Flight-logo" />Flights</Link>}
            <Link className="navlinks" to="/hotels"><img src={Hotels} alt="Hotels-logo" />Hotels</Link>
            <Link className="navlinks" to="/trains"><img src= {Train} alt="Train-logo" />Trains</Link>
            <Link className="navlinks" to="/login">Log In</Link>
            <Link className="navlinks" to="/signUp">Sign Up</Link>
            <div className='DashboardPortal'>       
      
            {localContext.LoginDetails.length > 0&& localStorage.length>0 &&<button  onClick={handleuser}className='btn-btn'>{"Hi "+localContext.LoginDetails[0].userName} Log {localData!== null ? "in" : "out"} </button>}
           
              </div> 
        </div>

    )

}

export default Navbar;
