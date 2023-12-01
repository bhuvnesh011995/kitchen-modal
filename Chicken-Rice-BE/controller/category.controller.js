const db = require("../models")

exports.addCatagory = async function(req,res,next){
    const {name} = req.body
    try {
        let obj = {}

        if(name) obj.name = name
        if(req.file) obj.photo = req.file.filename


        await db.categories.create(obj)

        res.status(201).end()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}




exports.getAllCategory = async function(req,res,next){
    try {
        let categories = await db.categories.find()

        if(!categories || !categories.length) return res.status(201).end()
        
        res.status(200).json({
            success:true,
            categories
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}


exports.updateCategory = async function (req,res,next){
    try {
        let {name,status} = req.body
        const {id} = req.params

        let isExist = await db.categories.exists({_id:id})
        
        if(!isExist){
            let err = new Error("no category exist!")
            err.status = 400
            throw err
        }

        let obj = {}
        if(name) obj.name = name
        if(status!=undefined) obj.status = status
        if(req.file) obj.photo = req.file.filename
        await db.categories.findOneAndUpdate({_id:id},{
            $set:obj
        })

        res.status(201).end()

    } catch (error) {
        next(error)
    }
}



exports.delateCategory = async function(req,res,next){
    const {id} = req.params
    try {
        let isExist = await db.categories.exists({_id:id})
        
        if(!isExist) return res.status(400).json({
            success:false,
            message:"no category exist"
        })

        await db.categories.deleteOne({_id:id})

        res.status(204).end();

    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}

