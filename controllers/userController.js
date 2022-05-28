const User=require('../models/User');
const bcrypt=require('bcrypt');
const mongoose= require('mongoose');

const updateUser=async(req,res)=>{
    if(req.body._id===req.params.id){
        if(req.body.password)
        {   
            const salt=await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hash(req.body.password,salt);
        }
        try{
            const updatedUser= await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updatedUser);
        }
        catch(err){
            res.status(400).json(err);
        }
    }
    else{
        res.status(400).json("No access to update this user details");
    }
   

};



const getUser=async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: username });
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  };
/*router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: username });
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });*/
  
  //get friends
 const getUsers=async (req, res) => {
    try {
      const friends = await User.find({});
      
      let friendList = [];
      friends.map((friend) => {
        const { _id, username, profileImg } = friend;
        friendList.push({ _id, username, profileImg });
      });
      res.status(200).json(friendList)
    } catch (err) {
      res.status(500).json(err);
    }
  };

module.exports={updateUser,getUser,getUsers};