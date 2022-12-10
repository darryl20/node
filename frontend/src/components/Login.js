import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    },[])


    const handleLogin=async ()=>{
        console.warn("email,password",email,password);
        let result =await fetch("http://192.168.0.104:3000/api/auth/login",{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
            'Content-Type':'application/Json'
        }
    });
    result=await result.json();
    console.warn(result);
    if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/');
    }
    else{
        alert("Please enter correct details");
    }
    }

    return (
    <div className='login'>
        <h1>Login</h1>
        <input className="inputbox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
        <input className="inputbox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
        <button className="submitbutton" onClick={handleLogin} type="submit">Login</button>
    </div>
    )
}

export default Login;