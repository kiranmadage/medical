import React, { useState, useEffect } from 'react'
import { Navbar } from '../../componant/Navbar/nav'
import axios from 'axios';
import './create.css'
import img1 from "./delete.png";
import img from './notes.png'


export default function Add() {

  
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [strenth, setStrenth] = useState()
  const [sellPrice, setSellPrice] = useState()
  const [expireDate, setExpireDate] = useState()
  const [quantity, setQuantity] = useState()

  const [edit, setEdit] = useState(false)
  const [id, setId] = useState()

  const [data, setData] = useState([])

  

  let getalldata = async () => {
    let getnotes = await axios.get('http://localhost:5000/stores');
    setData(getnotes.data)
    // console.log(getnotes.data)
  }
  useEffect(
    () => {
      getalldata();
    }, []
  )



  


  // put methode used
  let putdata = async () => {

    if (edit == true) {
      axios.put(`http://localhost:5000/store/${id}`, {
        name: name,
        category: category,
        strenth: strenth,
        sellPrice: sellPrice,
        expireDate: expireDate,
        quantity: quantity
      })
      // toster
      getalldata();
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



// delete api used
const deleteAPI = async (info) => {
  const id = info._id;
  await axios.delete(`http://localhost:5000/store/${id}`)
  // toast.error("Data is deleted");
  getalldata();
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


  return (
    <>
      <Navbar />
      <h1 className='name'>STOCK</h1>
      <br></br>

      <table border={1} className='table'>
        <thead >
          <tr>
            <th>Name </th>
            <th>Category</th>
            <th>Strenth</th>
            <th>Quantity</th>
            <th> SellPrice</th>
            <th>ExpireDate</th>
            <th>Action</th>
          </tr>

        </thead>
        {

          data.map(
            (info) => {
              return (
                <>

                  <tbody >

                    <tr className='bg-row' >
                      <td >{info.name}</td>
                      <td>{info.category}</td>
                      <td>{info.strenth}</td>
                      <td>{info.quantity}</td>
                      <td>{info.sellPrice}</td>
                      <td>{info.expireDate}</td>
                      {/* <td><button className='para'>ADD TO CART</button></td> */}
                      <td>
                      <div className='mainimg'>
                                            {/* <img className='img' src={img} onClick={
                                                () => {
                                                    updateAPI(info)
                                                }
                                            }></img> */}
                                            <img className='img' src={img1} onClick={
                                                () => {
                                                    deleteAPI(info)
                                                }
                                            }></img>
                                        </div>
                      </td>
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
