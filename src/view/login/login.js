import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './login.css'
import { Navbar } from '../../componant/Navbar/nav'

export default function Login() {





    const [EmailId,setEmailId]=useState()
  
    const [password,setpassword]=useState()
    





    const logAdata= async()=>{
        const data = await axios.post ('http://localhost:4000/login',{
          
            
           EmailId:EmailId,
           
           password:password
       
         })
       
         console.log(data)
        }

  return (

    
    <div>
        {/* <Navbar /> */}
      <div className='first1'>
        <div className='second1'>
          <p className='sign1'>Login</p><b />


          <input type='mail' placeholder='Email'required className='textbox1' onChange={(e)=>{setEmailId(e.target.value)}}/><br></br>
         
          <input type='password' placeholder='password' required className='textbox1' onChange={(e)=>{setpassword(e.target.value)}} /> <br></br>


         <a  href='/about' > <button  onClick={logAdata} className='create lbtn'>Submit</button></a>

        </div>

      </div>

    </div>
  )
}
