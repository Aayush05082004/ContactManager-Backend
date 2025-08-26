const asyncHandler=require("express-async-handler");
const user=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
//@desc Register a user
// @route POST/api/users/register
//@access public

const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable=await user.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }
    
    //Hash password
    const hashedPassword=await bcrypt.hash(password,10);
    console.log("Hashed password:",hashedPassword)
    const User=await user.create({
        username,email,password:hashedPassword
    })

    console.log(`User Created ${User}`);
    if(User){
        res.status(200).json({_id: User.id,email:User.email})
    }else{
        res.status(400);
        throw new Error("User data is not available");
    }
});

//@desc Login user
// @route POST/api/users/login
//@access public

const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const User =await user.findOne({email})

    //compare pass with hashed pass
    if(User && (await bcrypt.compare(password,User.password))){
        const accessToken=jwt.sign({
            user:{
                username:User.username,
                email:User.email,
                id:User.id
            }
        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"15m"}
    )
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw new Error("email or password is not valid")
    } 
});

//@desc Current user information
// @route GET/api/users/current
//@access private

const currentUser=asyncHandler(async(req,res)=>{
    res.json(req.user) 
});

module.exports={registerUser,loginUser,currentUser};