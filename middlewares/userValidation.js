import validator from "validator";

const validate = (req, res, next)=> {

if(!validator.isEmail(req.body.email)){
  return  res.status(400).json({message: "Invalid email format"});
  }
  
  if(!validator.isStrongPassword(req.body.password, {
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
    minSymbols: 1,
    minNumbers: 1
  }))
   {
    return res.status(400).json({message: "Weak Password: must contain uppercase, lowercase, number, and symbol"})
  }
  
  next();
}

export default validate;