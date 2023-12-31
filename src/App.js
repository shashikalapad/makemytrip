
import React, { useState,} from 'react';
import './App.css';
import ApiFetch from './components/FetchData/ApiFetch';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import SearchContent from './components/Navbar/SearchContent.jsx';
import TrainsApi from './components/FetchData/TrainsApi';
import Hotels from './components/FetchData/Hotels.jsx';
import NotFound from './components/NotFound.jsx';
import Login from './components/LOGIN/Login';
import SignUp from './components/SignUp/SignUp.jsx';
import Sidebar from './Sidebar'

import { BrowserRouter, Route, Routes } from "react-router-dom";
export const DataParentContext = React.createContext();


const App = () => {
  const [LoginDetails, setLoginDetails] = useState([]); 
  //console.log("shashi", LoginDetails.length===0);
    
  return (
    <>
 
  <BrowserRouter>
       <DataParentContext.Provider value={{ LoginDetails, setLoginDetails }} >
       
       <Navbar/>

        <Sidebar  pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />

         <Routes id="page-wrap">

           <Route path='/login' element={<Login setLoginDetails={setLoginDetails} />} />

           <Route path='/signUp' element={<SignUp />} />

           <Route path='/' element={<ApiFetch />} />

           <Route path='/hotels' element={<Hotels />} />

           <Route path='/trains' element={<TrainsApi />} />

           <Route path='/*' element={<NotFound />} />

         </Routes>
         <Footer />

       </DataParentContext.Provider>

      </BrowserRouter>

      </>
      ) 
 }
  export default App