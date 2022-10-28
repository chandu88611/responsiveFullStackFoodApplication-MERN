const User = require("../model/userModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


//@desc registerUser
//@route  /api
//@access private
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;
    if ( !email || !password) {
        res.status(400)
        throw new Error('please add all fields')
    }
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        res.status(400)
        throw new Error('user already exists')
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = new User({
        name, email, password:hashedPassword
    })
    try {
        user.save()
    } catch (error) {
        console.log(error)
    }
    if (user) {
        res.status(201).json({
            name: user.name,
            email: user.email,
            _id: user.id,
            token:generateToken(user._id) 
        })
        res.status(200).json(user)
    } else {

        res.status(401).json({ message: "user not created" })
    }


})


//@desc registerUser`
//@route  /api
//@access private
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password,user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token:generateToken(user. _id)

        })
    } else {

        res.status(400)
        throw new Error('invalid  credentials')
    }


})

//@desc registerUser
//@route  /api
//@access private
const getUser = asyncHandler(async (req, res) => {
    const user = await User.find()

    res.status(200).json(user)

})
const generateToken= (id)=>{
return  jwt.sign({id},"1234chandu",{expiresIn:"30d"})
}

module.exports = { registerUser, loginUser, getUser }

