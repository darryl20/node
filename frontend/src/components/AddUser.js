import React from 'react';

const AddUser=()=>{
    const [email,setEmail]=React.useState('');
    const [username,setUsername]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [firstName,setfirstName]=React.useState('');
    const [lastName,setlastName]=React.useState('');
    const [error,setError]=React.useState('');


    const addUser=async ()=>{

 
        if(!email || !username || !password ||!firstName||!lastName){
            setError(true);
            // return false;
        } 


        console.warn("email,username,password,password,firstName,lastName",{email,username,password,password,firstName,lastName})
        const userID=JSON.parse(localStorage.getItem("user"))._id;
        let result =await fetch("http://192.168.0.104:3000/api/auth/register",{
            method:'POST',
            body:JSON.stringify({email,username,password,password,firstName,lastName}),
            headers:{
            'Content-Type':'application/Json'
        }
        
    });
    result=await result.json();
    console.warn(result);
}
    return (
        <div className="product">
            <h1>Add Product</h1>
            <input className='inputbox' type="text" placeholder="Enter Email"
            value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
             { error && !email && <span className='error'>Enter Valid Email</span>}
            <input  className='inputbox' type="text" placeholder="Enter Username"
            value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
             { error && !username && <span className='error'>Enter Valid Username</span> }
            <input className='inputbox' type="text" placeholder="Enter Password"
            value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            { error && !password &&  <span className='error'>Enter Valid Password</span> }
            <input  className='inputbox' type="text" placeholder="Enter FirstName"
            value={firstName} onChange={(e)=>{setfirstName(e.target.value)}}/>
            { error && !firstName && <span className='error'>Enter Valid FirstName</span> }
            <input  className='inputbox' type="text" placeholder="Enter LastName"
            value={lastName} onChange={(e)=>{setlastName(e.target.value)}}/>
            { error && !lastName && <span className='error'>Enter Valid lastName</span> }
            <button  onClick={addUser} className='submitbutton' type="submit">Add Product</button>
        </div>
    )
}

export default AddUser;