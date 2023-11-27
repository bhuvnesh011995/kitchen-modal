const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config()
const db = require("../models")

exports.varifyToken = async (req,res,next)=>{
    let token = req.headers["x-access-token"]
    try {
      
        if(!token) return res.status(401).end()
        
        jsonwebtoken.verify(token, process.env.KEY, (err,decode)=>{
            if(err) return res.status(401).end()

            req.role = decode.role,
            req.username = decode.username,
            req.id = decode.id
        })
       
    } catch (error) {
        console.error(error)
        res.status(500).json({success:false,
        message:"something went wrong"})
    }
    
    next()
}



exports.verifyPermission = (permission=null) => async (req,res,next)=>{
    
    let role = await db.roles.findById(req.role)

    if(!role) return res.status(400).json({
        success:false,
        message:"some error occured can't veryfy permission"
    })

    if(role.permissions.includes(permission) || role.permissions.includes("All")) return next()
    else return res.status(401).json({
        success:false,
        message:"not authourised"
    })
}