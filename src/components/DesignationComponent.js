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

      const [message,setMessage]=useState("");



  const add = () =>{
 Axios.post('https://pratibha-server.herokuapp.com/create',{
     designation:designation

 }).then((res) =>{
    setMessage(res.data.message);
    console.log("success");
  }).catch(err =>{
      if(err.response && err.response.data){
          setMessage(err.response.data.message)
      }
      else{
          setMessage(err.message);
      }
  })
};





        return (
            <form onSubmit={handlesubmit}  >
                <h3>Add designation</h3>

                <div className="form-group">
                    <label>Designation Name</label>
                    <input type="text" value={designation}  onChange={handlechange}   className="form-control" placeholder="Enter" />
                </div>

                

                

                <button type="submit"   onClick={add}     className="btn btn-primary btn-block">Add</button>
               <p>{ message }</p>
            </form>
        );
    }
export default Designation