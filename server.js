const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const cors=require('cors');
const path=require('path');
dotenv.config();



app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log('Connected'))
.catch((err)=>console.log(err));


app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);


//app.use(express.static(path.join(__dirname,"client","build")));
/*app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","build","index.html"));
});*/

app.listen(process.env.PORT||5000,()=>console.log('Running'));