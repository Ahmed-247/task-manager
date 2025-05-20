import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginValidate = async (req, res, next) => {
  try {
    const user = await userModel.findOne({username: req.body.username})
   if(!user){
    return res.status(400).json("username not found");
   }
  
   if(!await bcrypt.compare(req.body.password, user.password)){
   return res.status(400).json("Password does not match")
   }
    
    res.json(jwt.sign({userid: user.id}, "secret key", {expiresIn: '100m'}))
  } catch(err) {
    next(err)
  }
};
  

const regValidate = async (req, res, next)=> {
  try {
  
  if(await userModel.findOne({username:req.body.username})){
   return res.status(409).json({message: "Username already exist"})
  };
  
  
  if(await userModel.findOne({email: req.body.email})){
   return res.status(409).json({message: "Email already exist"})
  }
  
  req.body.password = await bcrypt.hash(req.body.password, 10);
   res.status(201).json(await userModel.create(req.body));
} catch(err){
  next(err)
}
  }

   const profile = async (req, res, next) => {
    try{
    const auth = req.header("authorization");
  const decoded= jwt.verify(auth.split(" ")[1], "secret key")

  res.json(decoded);
    }catch(err) {
      next(err)
    }
}

   export {regValidate, loginValidate, profile};