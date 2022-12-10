import React from 'react';

const AddProduct=()=>{

    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
     const [error,setError]=React.useState('false'); 


    const addProduct=async ()=>{

 
        if(!name || !price || !category ||!company){
            setError(true);
            // return false;
        } 


        console.warn("name,price,category,company",{name,price,category,company})
        const userID=JSON.parse(localStorage.getItem("user"))._id;
        let result =await fetch("http://127.0.0.1:5000/add-product",{
            method:'POST',
            body:JSON.stringify({name,price,category,company,userID}),
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
            <input className='inputbox' type="text" placeholder="Enter Product Name"
            value={name} onChange={(e)=>{setName(e.target.value)}}/>
             { error && !name && <span className='error'>Enter Valid Name</span>}
            <input  className='inputbox' type="text" placeholder="Enter Product Price"
            value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
             { error && !price && <span className='error'>Enter Valid Price</span> }
            <input className='inputbox' type="text" placeholder="Enter Product Category"
            value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            { error && !category &&  <span className='error'>Enter Valid Category</span> }
            <input  className='inputbox' type="text" placeholder="Enter Product Company"
            value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
            { error && !company && <span className='error'>Enter Valid Company</span> }
            <button  onClick={addProduct} className='submitbutton' type="submit">Add Product</button>
        </div>
    )
}

export default AddProduct;