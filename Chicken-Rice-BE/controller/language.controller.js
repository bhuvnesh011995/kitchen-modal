const db = require("../models")
const { create_error } = require("../utility/createError")
const mongoose = require("mongoose")

exports.addLanguage = async function(req,res,next){
    const {name,code} = req.body

    try {
        
        if(!name || !code) throw create_error(400,`${!name?"name":"code"} is mandatory !`)

        let language = await db.languages.create({name,code})
  
        res.status(200).json(language)
        
    } catch (error) {
        next(error)
    }
}



exports.getLanguages = async function(req,res,next){
    try {
        let language = await db.languages.aggregate([
            {$project:{
                _id:1,
                name:1,
                code:1
            }}
        ])

        // let language = await db.languages.find().select("name code")

        res.status(200).json(language)
    } catch (error) {
        console.error(error)

        next(error)
    }
}
exports.deleteLanguage = async function(req,res,next){
    const {id} = req.params
    try {
        let isExist = await db.languages.exists({_id:id})
        
        if(!isExist) throw create_error(400,"no language exist")
        
        await db.languages.deleteOne({_id:id})
  
        res.send(204);
  
    } catch (error) {
        console.error(error)
        next(error)
    }
  }

  exports.updateLanguage = async function (req,res,next){
    try {
        let {name,code} = req.body
        const {id} = req.params
         
        let isExist = await db.languages.exists({_id:id})
        
        if(!isExist) throw create_error(400,"language does not exist!")
  
        let obj = {}
        if(name) obj.name = name
        if(code) obj.code = code
        let language = await db.languages.findOneAndUpdate({_id:id},{
            $set:obj
        },{new :true})
  
        res.status(200).json(language)
  
    } catch (error) {
        next(error)
    }
  }
  

  exports.updateLanguageFields = async (req,res,next)=>{
    try {
        const language = req.body
        const {id} = req.params

        let keys = Object.keys(language)
        let updatedField = keys.reduce((acc,curr)=>{
            acc[`language.${curr}`] = language[curr];
            return acc
        },{})
        await db.languages.updateOne({_id:id},{
            $set:updatedField
        })

        res.send(204)

    } catch (error) {
        next(error)
    }
  }

  exports.getLanguageById = async (req,res,next)=>{
    try {
        let {id} = req.params

        let language = await db.languages.aggregate([
            {$match:
                {_id:new mongoose.Types.ObjectId(id)}
            },
                {$project:{
                    _id:0,
                    language:1
                }}
        ])
if(!language.length) throw create_error(400,"no language exist")

        res.status(200).json(language[0].language)
    } catch (error) {
        next(error)
    }
  }
