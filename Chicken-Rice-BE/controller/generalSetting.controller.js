const db = require("../models")


exports.updatesystem = async (req,res,next)=>{
    try {
        let {
            title,shortTitle,systemName
        } = req.body
        let obj = {}
        if(title!= undefined) obj.title=title 
        if(shortTitle!= undefined) obj.shortTitle=shortTitle 
        if(systemName!= undefined) obj.systemName=systemName 
        if(req.files.logo?.length) obj.logo=req.files.logo[0].filename
        if(req.files.fevicon?.length) obj.fevicon=req.files.fevicon[0].filename
        if(req.files.systemLogo?.length) obj.systemLogo=req.files.systemLogo[0].filename

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