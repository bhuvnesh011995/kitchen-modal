const db = require("../models/index");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    let user = await db.users.findOne({ username: username });

    if (!user) return res.status(401).end();

    let isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) return res.status(401).end();

    let token = jsonwebtoken.sign(
      { username: user.username, role: user.role, id: user._id },
      process.env.KEY,
      { expiresIn: "1d" }
    );

    let obj = {success:true,accessToken:token,username}

    if(user.email) obj.email = user.email
    if(user.name) obj.name = user.name

    
    res
      .status(200)
      .json(obj)
      .end();
  } catch (error) {console.error(error), res.status(500).json({success:false,message:"something went wrong"})}
};



exports.signUp = async (req, res, next) => {
  let {name, username, password, email, phone, role } = req.body;

  try {
    let obj = {}
    if(name) obj.name = name
    if(username) obj.username = username
    if(email) obj.email = email
    if(password) obj.password = bcrypt.hashSync(password,10)
    if(phone) obj.phone = phone
    if(role) obj.role = role
    
    await db.users.create(obj)

    res.status(201).end()
  } catch (error) {
    console.error(error)
    res.status(500).json({
        success:false,
        message:"something went wrong"
    })
  }
};



exports.logout = async (req,res,next)=>{


  res.clearCookie("token")
  res.status(200).json({
    success:true,
    message:"logout successfull"
  })

}


exports.verifyuser = async (req,res,next)=>{
  res.status(201).end()
}