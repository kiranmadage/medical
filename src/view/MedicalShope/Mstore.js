import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Mstore.css'
import { Navbar } from '../../componant/Navbar/nav'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

export default function Mstore() {


  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [strenth, setStrenth] = useState()
  const [sellPrice, setSellPrice] = useState()
  const [expireDate, setExpireDate] = useState()
  const [quantity, setQuantity] = useState()

  const [data, setData] = useState([])

  const [edit, setEdit] = useState(false)
  const [id, setId] = useState()

  // // get methode
  // let getalldata = async () => {
  //   let getnotes = await axios.get(`http://localhost:5000/store/66a20398b2c0a17d671df101`);
  //   // setId(getnotes._ied)
  //   getnotes = getnotes.data;
  //   setName(getnotes.data.name)
  //   setCategory(getnotes.data.category)
  //   setStrenth(getnotes.data.strenth)
  //   setSellPrice(getnotes.data.sellPrice)
  //   setExpireDate(getnotes.data.expireDate)
  //   setQuantity(getnotes.data.quantity)
  //   //  setData(getnotes.data)
  //   // setExpireDate(getnotes.expireDate)
  //   // setQuantity(getnotes.quantity) 

  //   console.log(getnotes);
  // }
  
  
  // useEffect(

  //   () => {
  //     getalldata();
  //   }, []
  // )

  // put methode used
  let putdata = async () => {
    // alert('Put');
    if (edit === true) {
      axios.put(`http://localhost:5000/store/${id}`, {
        name: name,
        category: category,
        strenth: strenth,
        sellPrice: sellPrice,
        expireDate: expireDate,
        quantity: quantity
      })
      // toster
      
    }
    else {


      const save = await axios.post('http://localhost:5000/store', {
        name: name,
        category: category,
        strenth: strenth,
        sellPrice: sellPrice,
        expireDate: expireDate,
        quantity: quantity
      })

      console.log(save)


    }
  }



  // update API
  const updateAPI = async (info) => {
    // alert('Here');
    console.log(info)
    setId(info._id)
    setName(info.name)
    setCategory(info.category)
    setStrenth(info.strenth)
    setSellPrice(info.sellPrice)
    setExpireDate(info.expireDate)
    setQuantity(info.quantity)
    setEdit(true)
  }
  //  post method

  // const store = async () => {
  //   const savedata = axios.post('http://localhost:5000/store', {
  //     name: name,
  //     category: category,
  //     strenth: strenth,
  //     sellPrice: sellPrice,
  //     expireDate: expireDate,
  //     quantity: quantity
  //   })
  //   console.log(savedata)
  // }






  // const [edit, setEdit] = useState(false)
  // const [id, setId] = useState()


  // // put methode used
  // let putdata = async () => {

  //   if (edit == true) {
  //     axios.put(`http://localhost:5000/store/${id}`, {
  //       name: name,
  //       category: category,
  //       strenth: strenth,
  //       sellPrice: sellPrice,
  //       expireDate: expireDate,
  //       quantity: quantity
  //     })
  //     // toster
  //     getalldata();
  //   }
  //   else {


  //     const save = await axios.post('http://localhost:5000/store', {
  //       name: name,
  //       category: category,
  //       strenth: strenth,
  //       sellPrice: sellPrice,
  //       expireDate: expireDate,
  //       quantity: quantity
  //     })

  //     console.log(save)


  //   }
  // }







  return (
    <>
      <Navbar />
      <div>

        <div className='first'>
          <div className='second'>
            <p className='sign mx-5 text-success'>Add Stock</p><b />

            <input type='text' placeholder='Medicine Name' className='textbox' value={name} onChange={(e) => {
              setName(e.target.value)
              // console.log(e.target.value)
            }} />
            <input type='text' placeholder='Category' className='textbox' value={category} onChange={(e) => { setCategory(e.target.value) }} />
            <input type='text' placeholder='Strenth' className='textbox' value={strenth} onChange={(e) => { setStrenth(e.target.value) }} />
            <input type='number' placeholder='Quantity' className='textbox' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
            <input type='number' placeholder='SellPrice' className='textbox' value={sellPrice} onChange={(e) => { setSellPrice(e.target.value) }}></input>
            <input type='date' placeholder='ExpireDate' className='textbox' value={expireDate} onChange={(e) => { setExpireDate(e.target.value) }} /> <br></br>


            {/* <button onClick={store} className='create'>Submit</button> */}

            {edit === false ? <a className='Sbtn' href='./add'><button className='btn' onClick={putdata}>SAVE</button></a> : <button onClick={putdata}>UPDATE</button>}

          </div>

        </div>

      </div>


    </>
  )
}
