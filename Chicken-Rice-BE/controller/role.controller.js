const db = require("../models")

exports.addRole = async function(req,res,next){
    const {name,permissions} = req.body


    try{
        let obj = {}
        if(name) {
            //check if role already present

            if(await db.roles.exists({name:name})) return res.status(400).json({
                success:false,
                message:"role already exist"
            })
            obj.name = name
        }

        if(permissions) obj.permissions = permissions
        
        await db.roles.create(obj)

        res.status(200).json({
            success:true,
            message:"role is created"
        })
    }catch(error){
        console.error(error), res.status(500).json({success:false,message:"something went wrong"})
    }
}


exports.getAllRoles = async function(req,res,next){
    try{
        let roles = await db.roles.find({}).select("name permissions createdAt")

        res.status(200).json({
            success:true,
            roles
        })
    }catch(error){
        console.error(error), res.status(500).json({success:false,message:"something went wrong"})
    }
}


exports.updateRole = async function(req,res,next){
    const {name,permissions} = req.body
    const id = req.params.id

   try{
        let role = await db.roles.findById(id)
        if(!role) return res.status(400).json({
            success:false,
            message:"no role found"
        })

    let obj = {}
    if(name) obj.name = name
    if(permissions) obj.permissions = permissions

    await db.roles.findOneAndUpdate({_id:id},obj)

    res.status(200).json({
        success:true,
        message:"role updated"
    })
}catch(error){
    console.error(error), res.status(500).json({success:false,message:"something went wrong"})
}
}


exports.deleteRole = async function(req,res,next){
    const id = req.params.id

    try{
        let role = await db.roles.findById(id)
        if(!role) return res.status(400).json({
            success:false,
            message:"no role found"
        })

        await db.users.deleteMany({role:id})

        await db.roles.findOneAndDelete({_id:id})
        res.status(201).end()

}catch(error){
    console.error(error), res.status(500).json({success:false,message:"something went wrong"})
}
}



exports.getPermissions= async function(req,res,next){
    try {
        
        if(req.role){
            const role = await db.roles.findOne({_id:req.role})
            if(role) return res.status(200).json({
                success:true,
                permissions:role.permissions
            })
            else return res.status(201).end()
        }else return res.status(400).end()
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}