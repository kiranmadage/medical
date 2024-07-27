
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Navbar } from '../../componant/Navbar/nav';
import './userdata.css';

export default function Userdata() {

    const [data, setData] = useState([])

    
    const alldata = async () => {
        const savedata = await axios.get('http://localhost:5000/users')
    
        console.log(savedata.data)
        setData(savedata.data)
        // alert("data is submited")
      }
    
      useEffect(
        () => {
          alldata()
        },[]
      )
    
      return (
        <>
          
          <Navbar />
          <h1 className='udata'>User Data</h1>
    
          <table border={1} className='table'>
            <thead >
              <tr>
                <th>UserName </th>
                <th> Add</th>
                <th>EmailId</th>
                <th>Phone</th>
                <th>password </th>
                <th>Medicin </th>
              </tr>
    
            </thead>
            {
    
    data.map(
      (info) => {
        return (
          <>
    
            <tbody >
    
              <tr >
                <td >{info.UserName}</td>
                <td>{info.Add}</td>
                <td>{info.EmailId}</td>
                <td>{info.Phone}</td>
                <td>{info.password}</td>
                <td>{info. Medicins}</td>
              </tr>
    
    
            </tbody>
          </>
        )
      }
    )
    
    
    }
    </table>
        </>
      )
}
