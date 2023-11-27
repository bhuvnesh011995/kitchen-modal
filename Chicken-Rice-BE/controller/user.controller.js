const db = require("../models")


exports.getAllusers = async function(req,res,next){
    try {
        let users = await db.users.find().populate({path:"role",select:"name"})

        if(!users || !users.length) return res.status(201).end()

        res.status(200).json({
            success:true,
            users
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}