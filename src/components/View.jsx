import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'


const View = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/viewbus").then(
            (response)=>{
                changeData(response.data)
    
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <br></br><h3><u><center>ViewAll Bus</center></u></h3><br></br>
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-dark table-striped-columns">
                           
                                <thead>
                                <tr>
                                    <th scope="col">Bus Name</th>
                                    <th scope="col">Route</th>
                                    <th scope="col">Bus No</th>
                                    <th scope="col">Driver Name</th>
                                    
                                    
                                </tr>
                                </thead>
                                <tbody>
                                   {data.map(
                                    (value,index)=>{
                                        return <tr>
                                        <td>{value.bname}</td>
                                    <td>{value.route}</td>
                                    <td>{value.busNo}</td>
                                    <td>{value.dname}</td>
                                    </tr>
                                   
                                    }
                                   )}
                                </tbody>
                            </table>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View