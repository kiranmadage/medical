import React from 'react'
import { Navbar } from '../../componant/Navbar/nav';
import './home.css';
import img from './1st.jpg'
import img1 from './s1.jpg'
import img2 from './s2.jpg'
import img3 from './s3.jpg'
import img4 from './s4.jpg'
import h1 from './h1.png'
import h2 from './h2.png'
import h3 from './h3.png'
import h4 from './h4.png'



export default function Home() {

  return (
    <>
      <Navbar />
      <div>
      <br></br>
      <br></br>
        <hr></hr>
        
        <h1 className='hname'> Category</h1>
        <hr></hr>
        <div className='hdisplay'> 
        <img className='shop' src={h1}></img>
        <img className='shop' src={h2}></img>
        <img className='shop' src={h3}></img>
        <img className='shop' src={h4}></img>
        
        </div>

        {/* <img className='img1' src={img} /> */}
      </div>
      <br></br>
      <br></br>
        <hr></hr>
      <h1 className='hname'>Services</h1>
      <hr></hr>
        <div className='hdisplay'>
          <img className='hing' src={img1}></img>
          <img className='hing' src={img2}></img>
          {/* <img className='hing' src={img3}></img> */}
          <img className='hing' src={img4}></img>

        </div>
    </>
  )
}
