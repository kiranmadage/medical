import React, { useEffect, useState } from 'react'
import './sign.css'
import axios from 'axios'
import { Navbar } from '../../componant/Navbar/nav'



export default function Sign() {


  const [UserName, setUserName] = useState()
  const [EmailId, setEmailId] = useState()
  const [Phone, setPhone] = useState()
  const [Add, setAdd] = useState()
  const [password, setpassword] = useState()



  const signalldata = async () => {
    const savedata = await axios.post('http://localhost:5000/sign', {
      UserName: UserName,
      Add: Add,
      EmailId: EmailId,
      Phone: Phone,
      password: password

    })

    console.log(savedata)
    // alert("data is submited")
  }

  useEffect(
    () => {
      signalldata()
    },[]
  )

  return (
    <div>
      <Navbar />
<br></br>
      <div className='first'>
        <div className='second'>
          <p className='sign'>Registation Form</p><b />

          <input type='text' placeholder='UserName' required className='textbox' onChange={(e) => {
            setUserName(e.target.value)
            console.log(e.target.value)
          }} />
          <input type='text' placeholder='Address'required className='textbox' onChange={(e) => { setAdd(e.target.value) }} />
          <input type='mail' placeholder='Email'required className='textbox' onChange={(e) => { setEmailId(e.target.value) }} /><br></br>
          <input type='number' placeholder='mobile No'required className='textbox' onChange={(e) => { setPhone(e.target.value) }}></input>
          <input type='password' placeholder='password'required className='textbox' onChange={(e) => { setpassword(e.target.value) }} />
          <p className='paragraph'>Already have an account? <a href='/login' className='create'> Login</a></p>
          <br></br>


          <a href='./mstore'><button onClick={signalldata} className='create signbtn'>Submit</button></a>

        </div>

      </div>
    </div>
  )
}
