import React, { Component ,useState} from "react";
import { FormControl } from "react-bootstrap";
import Axios from 'axios';




 const  Designation=() => { 
     const [designation,setDesignation]=useState("");
     const handlechange=(e) =>{
       setDesignation(e.target.value) 
     }

     const handlesubmit=(e) =>{
         e.preventDefault()
        console.log(designation)
      }



  const add = () =>{
 Axios.post('http://localhost:3001/designation',{
     designation:designation

 }).then(() =>{

    console.log("success");
  });
};





        return (
            <form onSubmit={handlesubmit}  >
                <h3>Add designation</h3>

                <div className="form-group">
                    <label>Designation Name</label>
                    <input type="text" value={designation}  onChange={handlechange}   className="form-control" placeholder="Enter" />
                </div>

                

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit"   onClick={add}     className="btn btn-primary btn-block">Add</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
export default Designation