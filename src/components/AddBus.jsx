import React, { useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

const AddBus = () => {
    const [data, setData] = useState({
        "bname": "",
        "route": "",
        "busNo": "",
        "dname": ""
    })
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)


        axios.post("http://localhost:8080/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("success")
                } else {
                    alert(Error)
                }
            }
        )

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
                            <input type="text" className="form-control" name='bname' value={data.bname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Route</label>
                            <input type="text" className="form-control" name='route' value={data.route} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Bus Number</label>
                            <input type="text" className="form-control" name='busNo' value={data.busNo} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Drivers Name</label>
                            <input type="text" className="form-control" name='dname' value={data.dname} onChange={inputHandler} />
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

export default AddBus