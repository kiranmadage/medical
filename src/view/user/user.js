import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react'
import { Navbar } from "../../componant/Navbar/nav";
import './user.css'

export default function User() {

    const [UserName, setUserName] = useState()
    const [EmailId, setEmailId] = useState()
    const [Phone, setPhone] = useState()
    const [Add, setAdd] = useState()
    const [password, setpassword] = useState()
    const [Medicins, setMedicins] = useState()

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
        }, []
    )

    const userdata = async () => {
        const savedata = await axios.post('http://localhost:5000/user', {
            UserName: UserName,
            Add: Add,
            EmailId: EmailId,
            Phone: Phone,
            password: password,
            Medicins: Medicins

        })

        console.log(savedata)
        // alert("data is submited")
    }


    return (
        <>
            <div>
                <Navbar />
                <div>
                    <h1 className="cente">Add User</h1>
                    <form className='bookadd'>


                        <label className='booklabel'>NAME </label>:
                        <input type='text' placeholder='User Name' className='bookinp' onChange={(e) => {
                            setUserName(e.target.value)
                        }} /><br />


                        <label className='booklabel'>ADDRESS</label>:
                        <input type='text' placeholder='Address' className='bookinp' onChange={(e) => {
                            setAdd(e.target.value)
                        }} /><br />

                        <label className='booklabel'>E-MAIL</label>:
                        <input type='mail' placeholder='User Email' className='bookinp' onChange={(e) => {
                            setEmailId(e.target.value)
                        }} /><br />


                        <label className='booklabel'>PASSWORD</label>:
                        <input type='password' placeholder='Password' className='bookinp' onChange={(e) => {
                            setpassword(e.target.value)
                        }} /><br />

                        <label className='booklabel'>MOBILE NO</label>:
                        <input type='number' placeholder='Mobile Number' className='bookinp' onChange={(e) => {
                            setPhone(e.target.value)
                        }} /><br />



                        <label className='booklabel'>MEDICINS</label>:
                        <input type='text' placeholder='Medicin Name' className='bookinp' onChange={(e) => {
                            setMedicins(e.target.value)
                        }} /><br />

                        <button className='bookSbtn' onClick={userdata}><a className="add" href='./userdata'>ADD</a></button>
                        {/* <button className='bookcbtn' >CLEAR</button> */}
                    </form>
                </div>


            </div>
        </>
    )
}
