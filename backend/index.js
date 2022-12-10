const express=require("express");
              require('./db/config');
const User=require('./model/User');
const Product=require('./model/Product');
const cors=require("cors");
const app=express();

//middleware
app.use(express.json());
app.use(cors());

/* app.post("/register",(req,res)=>{
    // res.send("api in progress");
    res.send(req.body);
}) */

//Save data in MongoDB
app.post("/register",async (req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    //delete password from response
    result=result.toObject();
    delete result.password;
    res.send(result);
})
/* const connectDB=async()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/College");
    const productSchema=new mongoose.Schema({});
    const product=new mongoose.model('Student',productSchema);
    const data=await  product.find();
    console.warn(data);
}
 
connectDB();
*/


app.post('/login',async (req,res)=>{
    if(req.body.password && req.body.email){
let user=await User.findOne(req.body).select('-password');
    if(user){
        res.send(user);
    }
    else{
        res.send({result:'No user Found'});
    }
    }else{
        res.send({result:'No user Found'});
    }
    
    // res.send(user);
    // res.send(req.body);
})



app.post('/add-product',async (req,res)=>{
    let product=new Product(req.body);
    let result=await product.save();
    res.send(result);
})



app.get("/",(req,resp)=>{
    resp.send("App is working");
});

app.listen(5000)