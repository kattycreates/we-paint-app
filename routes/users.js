
const Router=require('express').Router();
const userController=require('../controllers/userController');

Router.put('/:id',userController.updateUser);

Router.get("/",userController.getUser);
Router.get("/friends",userController.getUsers)
module.exports=Router;
