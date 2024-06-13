import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginUser = () => {

    const [data,changeData]=useState([
        {
            "email":"",
            "password":""
        }
     ])
  
  const inputHandler=(event)=>{
      changeData({...data,[event.target.name]:event.target.value})
  }
  
  const readValue=()=>{
      console.log(data)
      axios.post("http://localhost:8080/login",data).then(
          (response)=>{
              console.log(response.data)
              if (response.data.status=="success") {
                  alert("successfully logined")
                  
              } else {
                  alert("error")
                  
              }
          }
      ).catch(
          (error)=>{
              console.log(error)
          }
      )
  }
  return (
    <div>
           <h1 align="center">SIGNIN</h1>
            <div className="container">
                <div class="card" >
                   
                        <div class="card-body">

                        </div>
                        <div className="row">
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">email</label>
                                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password"  className="form-control" name='password' value={data.password} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success" onClick={readValue}>login</button>
                                        <p>new users click here <Link to="/reg">Sign up</Link></p>
                                        
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                </div>    </div>
    </div>
  )
}

export default LoginUser