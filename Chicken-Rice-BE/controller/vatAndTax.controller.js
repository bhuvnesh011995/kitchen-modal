const db = require("../models")

exports.addTax = async (req,res,next)=>{
    try {
        let vatAndTax = await db.vatAndTax.create(req.body)

        res.status(200).json(vatAndTax)
    } catch (error) {
        naxt(error)
    }
}


exports.updateTax = async (req,res,next)=>{
    try {
        const {id} = req.parmas

        let obj = {}
        if(!req.body.name) obj.name = req.body.name
        if(!req.body.value) obj.value = req.body.value
        if(!req.body.status) obj.status = req.body.status

        let vatAndTax = await db.vatAndTax.findOneAndUpdate({_id:id},{$set:obj},{new :true}).lean()

        res.status(200).json(vatAndTax)
    } catch (error) {
        next(error)
    }
}



exports.getAllVatAndTax = async (req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}