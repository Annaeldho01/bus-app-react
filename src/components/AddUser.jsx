import React, { useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

const AddUser = () => {
    const [data,setData]=useState({
        "name":"",
        "email":"",
        "mobile":"",
        "gender":"",
        "password":"",
        "confirmpassword":""
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
       }
    
       const readValue=()=>{
        console.log(data)
        if(data.password==data.confirmpassword)
            {
              
        axios.post("http://localhost:8080/reg",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert(Error)
                }
            }
        )
        
       }
       else{
        alert("Password doesnt match")
       }
    }
  return (
    <div>
        
        <div className="container">
            <h2 align="center">ADD BUS</h2>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input  type="email" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input  id="" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender</label>
                            <input  id="" className="form-control" name='gender' value={data.gender} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control"  name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control"  name='confirmpassword' value={data.confirmpassword} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 colxl-6 col-xxl-6">                          
                            <button className="btn btn-success" onClick={readValue}>REGISTER </button>
                            <p>Back to login.<Link to="/">Go back</Link>LOGIN</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default AddUser