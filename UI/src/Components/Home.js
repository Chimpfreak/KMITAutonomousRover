import React,{useState} from 'react';
import { auth } from './Firebase';
import firebaseDB from './Firebase'
import {storage} from './Firebase'

const Home = ({presentUser}) => {
  const [data,setData]=useState({
    name:"",
    item:"",
    address:"",
    sec:"",
    email:"",
  })
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    var res="",x=data.email;
    for(let i=0;i<x.length;i++){
      if(x[i]==='@'){
        break
      }
      else{
        res=res+x[i]
      }
    }
    console.log(res);
    var dataAdded=await firebaseDB.child("orders").push(
      data,
      err=>{
        if(err){
          console.log(err);
        }
        else{
          window.alert("Task Added Successfully");
        }
      }
    )
    setData({
      name:"",
      address:"",
      item:"",
      sec:"",
      email:"",
    })
    const imageref=storage.ref(res).put(image).on("state_changed");
    imageref();
  }
  const [image,setImage]=useState('');
  return (
    <>
          <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-3 pb-2 navbar-fixed-top">
        <div className="container">
          <div className="nav-item float-start">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
              <li><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="orange" class="bi bi-justify-right" viewBox="0 0 16 18">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg></li>&nbsp;&nbsp;
                <li> <h5 className="text-light">{presentUser.email}</h5></li>
              </ul>
            </div>
          </div>
          <div className="nav-item float-end">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto px-3">
              <li><button className='btn btn-outline-light' onClick={()=>auth.signOut()}>LogOut</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <br/><br/><br/>
      <div className="row px-3 justify-content-center">
        <div className="card col-sm-5 bg-l rounded contactuu" style={{height:"650px"}} >
        <center >
          <br/>
              <h4 align="center"><p style={{fontFamily:"verdana"}}>Delivery Details</p></h4>
            <form>
            <div className='row'>
              <div className='col'>
              <input type="text" style={{border:"1px solid black"}} className='form-control col-sm-4' placeholder='Name' name='name' value={data.name} onChange={changeHandler}/>
              </div>
              <div className='col'>
              <input type="text" style={{border:"1px solid black"}} className='form-control' placeholder='Email' 
              name='email'  value={data.email} onChange={changeHandler}/>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
              <input type="file" style={{border:"1px solid black"}} className='form-control' onChange={(e)=>{setImage(e.target.files[0])}}/>
              <small className='d-flex justify-content-start' style={{color:"brown"}}>&nbsp;&nbsp;*Upload your picture here.. (format : JPG or JPEG or PNG)</small>
              </div>
            </div>
            <div className='row'>
            <div className='col'>
              <br/><br/>
                <div style={{width:"200px"}}>
                <select name="item" id="item" onChange={changeHandler} value={data.item}>
                  <option name='' item="" >Items</option>
                  <option name='OCA' item="OCA" >OCA</option>
                  <option name='Cpp' item="Modern C++">Modern C++</option>
                  <option name='python' item="Python for you">Python for you</option>
                  <option name='Iot' item="Learning Iot">Learning Iot</option>
                  <option name='A4' item="A4 Papers">A4 Papers</option>
                  <option name='Whitener' item="Whitener">Whitener</option>
                  <option name='Gum' item="Gum">Gum</option>
                </select>
                </div>
              </div>
              <div className='col'>
              <br/><br/>
                <div style={{width:"200px"}}>
                <select name="sec" id="sec" onChange={changeHandler} value={data.sec}>
                  <option name='' sec="CSE" >Department</option>
                  <option name='cse' sec="CSE" >CSE</option>
                  <option name='aiml' sec="AiML">AiML</option>
                  <option name='it' sec="IT">IT</option>
                  <option name='ds' sec="DS">DS</option>
                </select>
                </div>
              </div>
            </div>
            <br/><br/>
            <div className='row'>
              <div className='col'>
                <textarea style={{border:"1px solid black"}} cols={5} rows={5} className='form-control' placeholder='Enter your Address here...' name='address' value={data.address} onChange={changeHandler}></textarea>
              </div>
            </div>
            <br/><br/>
            <button className='btn btn-dark' onClick={submitHandler}>Submit</button><br/>
        </form>
        </center>
      </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    </>
  )
}

export default Home
