const db = require("../models")
const { create_error } = require("../utility/createError")

exports.addCurrency = async function(req,res,next){

    try {
        
        let currency=await db.currency.create(req.body)
        res.status(200).json(currency)
        
    } catch (error) {
       next(error)
    }
}

exports.getCurrency = async function(req,res,next){
    try {
        let currencies = await db.currency.aggregate([
            {$match:{}},
            {$project:{
                name:1,code:1,symbol:1,exchangeRate:1
            }}
        ])
        
        res.status(200).json(currencies)
    } catch (error) {
        next(error)
    }
}
exports.deleteCurrency = async function(req,res,next){
    const {id} = req.params
    try {
        let isExist = await db.currency.exists({_id:id})
        
        if(!isExist) throw create_error(400,'no currency available')
        
        await db.currency.deleteOne({_id:id})
  
        res.status(204).end();
  
    } catch (error) {
        next(error)
    }
  }

  exports.updateCurrency = async function (req,res,next){
    try {
        let {name,code,symbol,exchangeRate} = req.body
        const {id} = req.params
         
        let isExist = await db.currency.exists({_id:id})
        
        if(!isExist) throw create_error(400,'no currency available')
  
        let obj = {}
        if(name!=undefined) obj.name = name
        if(code!=undefined) obj.code = code
        if(symbol!=undefined) obj.symbol = symbol
        if(exchangeRate!=undefined) obj.exchangeRate =exchangeRate
        let currency = await db.currency.findOneAndUpdate({_id:id},{
            $set:obj
        },{new:true})
  
        res.status(200).json(currency)
  
    } catch (error) {
        next(error)
    }
  }
  