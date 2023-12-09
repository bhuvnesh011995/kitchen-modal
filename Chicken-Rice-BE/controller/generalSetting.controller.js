const { isObjectIdOrHexString } = require("mongoose")
const db = require("../models")
const { deleteFile } = require("../utility/deleteFile")

exports.updatesystem = async (req,res,next)=>{
    try {
        let {
            title,shortTitle,systemName
        } = req.body
        let preSetting = await db.system.findOne().lean()
        let obj = {}
        if(title!= undefined) obj.title=title 
        if(shortTitle!= undefined) obj.shortTitle=shortTitle 
        if(systemName!= undefined) obj.systemName=systemName 
        if(req.files.logo?.length){
            if(preSetting.logo) await deleteFile(preSetting.logo)
             obj.logo=req.files.logo[0].filename
            }
        if(req.files.fevicon?.length){
            if(preSetting.fevicon) await deleteFile(preSetting.fevicon)
             obj.fevicon=req.files.fevicon[0].filename
            }
        if(req.files.systemLogo?.length){
            if(preSetting.systemLogo) await deleteFile(preSetting.systemLogo)
             obj.systemLogo=req.files.systemLogo[0].filename
            }

        let system = await db.system.findOneAndUpdate({},{
            $set:obj
        },{new :true})

        res.status(200).json(system)
    } catch (error) {

        next(error)
    }
}






exports.getSystemSetting = async (req,res,next)=>{
    try {
        let system = await db.system.aggregate([{$match:{}},{$project:{_id:0,logo:1,fevicon:1,title:1,systemLogo:1,systemLogo:1,systemName:1,shortTitle:1}}])
        res.status(200).json(system[0])
    } catch (error) {
        next(error)
    }
}


exports.deleteLogos = async (req,res,next)=>{
    try {
        const {field} = req.params
        if(!["logo","systemLogo","fevicon"].includes(field)) return res.sendStatus(400)
        let preSetting = await db.system.findOne().lean()

        if(preSetting[field]) await deleteFile(preSetting[field])
        else return res.sendStatus(400)

        await db.system.updateOne({},{
            $set:{[field]:null}
        })

        res.sendStatus(204)

    } catch (error) {
        next(error)
    }
}