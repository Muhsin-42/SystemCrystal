import React, { useState } from 'react'
import axios from '../../../utils/axios'
import { useDispatch } from 'react-redux'
import { setBasicDetails } from '../../../Redux/store'

const EditBasicDetails = ({data,handleToggle}) => {
    const [phone1,setPhone1] = useState(data.phone1)
    const [phone2,setPhone2] = useState(data.phone2)
    const [email,setEmail] = useState(data.email)
    const [address,setAddress] = useState(data.address)
    const [addressurl,setAddressUrl] = useState(data.addressurl)
    const dispatch = useDispatch();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.put('api/admin/basicDetails',{phone1,phone2,email,address,addressurl});
            if(response.status < 310){
              dispatch(setBasicDetails({basicDetails: response.data}))
              handleToggle();
            }
        } catch (error) {
        }
    }


  return (
    <div className='basic-det-card shadow-lg'>
        <span className='fs-3'>Edit Details</span>
        <form action="" className='form-group'>
            <input className='m-2 form-control' type="text" value={phone1}  onChange={(e)=>setPhone1(e.target.value)} placeholder='Phone 1'/>
            <input className='m-2 form-control' type="text" value={phone2}  onChange={(e)=>setPhone2(e.target.value)} placeholder='Phone 2' />
            <input className='m-2 form-control' type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <input className='m-2 form-control' type="text" value={addressurl}   onChange={(e)=>setAddressUrl(e.target.value)} placeholder='Address Url' />
            <textarea className='m-2 form-control' type="text" value={address}   onChange={(e)=>setAddress(e.target.value)} placeholder='Address' />
            <button className='btn btn-outline-success w-100' onClick={handleSubmit} >UPDATE</button>
        </form>
    </div>
  )
}

export default EditBasicDetails