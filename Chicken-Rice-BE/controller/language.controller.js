const db = require("../models")
const { create_error } = require("../utility/createError")

exports.addLanguage = async function(req,res,next){
    const {name,code} = req.body
    console.log(req.body)
    try {
        let obj = {}

        if(name) obj.name = name
        if(code) obj.code =code
        await db.language.create(obj)
        res.status(201).end()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}



exports.getLanguage = async function(req,res,next){
    try {
        let language = await db.language.find()

        if(!language || !language.length) return res.status(201).end()
        
        res.status(200).json({
            success:true,
            language
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}
exports.deleteLanguage = async function(req,res,next){
    const {id} = req.params
    try {
        let isExist = await db.language.exists({_id:id})
        
        if(!isExist) return res.status(400).json({
            success:false,
            message:"no language exist"
        })
        
        await db.language.deleteOne({_id:id})
  
        res.status(204).end();
  
    } catch (error) {
        console.error(error)
  
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
  }

  exports.updateLanguage = async function (req,res,next){
    try {
        let {name,code} = req.body
        const {id} = req.params
         
        let isExist = await db.language.exists({_id:id})
        
        if(!isExist) throw create_error(400,"language does not exist!")
  
        let obj = {}
        if(name) obj.name = name
        if(code) obj.code = code
        await db.language.findOneAndUpdate({_id:id},{
            $set:obj
        })
  
        res.status(201).end()
  
    } catch (error) {
        next(error)
    }
  }
  