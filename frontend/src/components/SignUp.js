import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    
    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    })

    const collectData=async ()=>{
        // console.warn(name,email,password);
        let result=await fetch('http://127.0.0.1:5000/register',{
        method:'POST',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/Json'
        }
        });
        result=await result.json();
        localStorage.setItem("user",JSON.stringify(result));
        console.warn(result);

        if(result){
            navigate('/')
        }
    }
    return (
        <div className='signup'>
            <h1>Register</h1>
          <input className="inputbox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
          <input className="inputbox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
          <input className="inputbox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
          <button className="submitbutton" onClick={collectData} type="submit">Submit</button>
        </div>
    )
}

export default SignUp;