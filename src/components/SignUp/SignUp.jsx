import React, { useEffect,useState } from 'react'
// import './Login.css'
import Facebook from '../../Logo/facebook.png'
import Google from '../../Logo/Google.png'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navegate = useNavigate();
    const [userName,setUser]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    // const [errors,setErrors]=useState({});
    // setUser([...userName, { email: email, password: password }])
    // const [userName, setUsers] = useState(() => {
    //     const data = localStorage.getItem("data")
    //     return data ? JSON.parse(data) : []
    //   })

    // var letters = /^[A-Za-z]+$/;
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    // let details;
    // if((userName.valueOf.match(letters))&&(email.valueOf.match(mailformat))&&(password.valueOf.match(paswd)))  
    
    const details =(e)=>{
        e.preventDefault();
        formValidation() 
      
        localStorage.setItem("userName",userName)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)         
           alert("Registered Successfully");
              navegate('/login')
             return true; 
          
         } 
        
         const formValidation = () => {
            // let newErrors = {}
            if (userName === "") {
              alert("Name Can't Be Blanck");
            }
            
            if (email === "") {             
               alert ("Email Address Is Required");
            }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {             
                alert("Email is Valid");
            }else  {               
                alert("Email address is invalid");              
            }
            
            if (password === "") {
             alert("Password Is Required");
            } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(password)) {
             alert("Invalid Password Format");
            } 
            else {           
                alert("Correct Password");
            }
            // setErrors(newErrors)
            // return false;
          } 
          useEffect(() => {
            localStorage.setItem("data", JSON.stringify(userName))
          }, [userName])
                  
      
return (
<form >
    <div className='LoginContainer'>
        <div className='mainLogin'>     
          <h1 style={{ textAlign: "center", marginTop: "15px" }}>
             Log in</h1>    
          <h3 style={{ textAlign: "center", marginTop: "-15px" }}>
           Don't have an account?<span style={{ color: "rgb(13,110,253)" }}>
           <Link to="/login" style={{ color: "rgb(13,110,253)", textDecoration:"none" }}>
            Log In </Link></span></h3>
    
       <div className='icons'>
          <button style={{ marginRight: "10px" }}><img src={Google} alt="" style={{ width: "38px", borderRadius: "50%" }} />Sign in with  <span style={{ color: "red", }}><b>Google</b></span></button>
          <button id='iconFace'><img src={Facebook} alt="" /></button>
        </div>
    
    <div className='OR'>
        <div className='spaceDiv'></div>
             <span className='OORR'>or</span>
                <div className='spaceDiv'></div>
    </div>
        
    <div className='center' >
            <div className='Email'>
                <label htmlFor="" style={{ marginRight: "200px" }}>Username</label><br />
                 <input type="text" value={userName}placeholder='Enter Username' required onChange={(e)=>setUser(e.target.value)} /><br />
            </div>
            {/* {errors.userName} */}
            
            <div className='Email'>
               <label htmlFor="" style={{ marginRight: "220px" }}>
               Email</label><br />
               <input type="email" value={email}placeholder='Enter Email' required 
               onChange={(e)=>setEmail(e.target.value)} /><br />
           </div>
           {/* {errors.email} */}
        
           <div className='Email'>
               <label htmlFor="" style={{ marginRight: "200px" }}>
               Password</label><br />
               <input type="password" value={password}placeholder='Enter Password'required
              onChange={(e)=>setPassword(e.target.value)}  /><br />
            </div>
            {/* {errors.password} */}
       
              <button style={{marginTop:"-8px"}} onClick={(e)=>details(e)} >
              Register</button>                        
        </div>
    </div>
</div>
</form>
    )
}


export default Login
// const Login = () => {
//     const navegate = useNavigate();
//     const [userName,setUser]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
    
//     const details =(e)=>{
//         e.preventDefault();
//         localStorage.setItem("userName",userName)
//         localStorage.setItem("email",email)
//         localStorage.setItem("password",password)
//         alert("Registered Successfully");
//         navegate('/login')
//     }
// return (
//     <form>
//         <div className='LoginContainer'>
//             <div className='mainLogin'>
//                 <h1 style={{ textAlign: "center", marginTop: "15px" }}>Log in</h1>
//                 <h3 style={{ textAlign: "center", marginTop: "-15px" }}>Don't have an account?<span style={{ color: "rgb(13,110,253)" }}><Link to="/login" style={{ color: "rgb(13,110,253)", textDecoration:"none" }}> Log In </Link></span></h3>
//                 <div className='icons'>
//                     <button style={{ marginRight: "10px" }}><img src={Google} alt="" style={{ width: "38px", borderRadius: "50%" }} />Sign in with  <span style={{ color: "red", }}><b>Google</b></span></button>
//                     <button id='iconFace'><img src={Facebook} alt="" /></button>
//                 </div>
//                 <div className='OR'>
//                     <div className='spaceDiv'></div>
//                     <span className='OORR'>or</span>
//                     <div className='spaceDiv'></div>
//                 </div>
//                 <div className='center'>
//                     <div className='Email'>
//                         <label htmlFor="" style={{ marginRight: "200px" }}>Username</label><br />
//                         <input type="text" placeholder='Enter Username' onChange={(e)=>setUser(e.target.value)} required /><br />
//                     </div>
//                     <div className='Email'>
//                         <label htmlFor="" style={{ marginRight: "220px" }}>Email</label><br />
//                         <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} required /><br />
//                     </div>
//                     <div className='Email'>
//                         <label htmlFor="" style={{ marginRight: "200px" }}>Password</label><br />
//                         <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} required /><br />
//                     </div>
//                     <button style={{marginTop:"-8px"}} onClick={(e)=>details(e)} >Register</button>
                    
//                 </div>
//             </div>
//         </div>
//     </form>
// )
// }

// export default Login