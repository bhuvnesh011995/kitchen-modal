const db = require("../models")

exports.addCurrency = async function(req,res,next){
    const {name,code,symbol,exchangeRate} = req.body
    console.log(req.body)
    try {
        let obj = {}

        if(name) obj.name = name
        if(code) obj.code =code
        if(symbol) obj.symbol = symbol
        if(exchangeRate) obj.exchangeRate =exchangeRate
        await db.currency.create(obj)
        res.status(201).end()
        
    } catch (error) {
       next(error)
    }
}



exports.getCurrency = async function(req,res,next){
    try {
        let currency = await db.currency.find()

        if(!currency || !currency.length) return res.status(201).end()
        
        res.status(200).json({
            success:true,
            currency
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}
exports.deleteCurrency = async function(req,res,next){
    const {id} = req.params
    try {
        let isExist = await db.currency.exists({_id:id})
        
        if(!isExist) return res.status(400).json({
            success:false,
            message:"no currency exist"
        })
        
        await db.currency.deleteOne({_id:id})
  
        res.status(204).end();
  
    } catch (error) {
        console.error(error)
  
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
  }

  exports.updateCurrency = async function (req,res,next){
    try {
        let {name,code,symbol,exchangeRate} = req.body
        const {id} = req.params
         
        let isExist = await db.currency.exists({_id:id})
        
        if(!isExist) return res.status(400).json({
            success:false,
            message:"no currency exist"
        })
  
        let obj = {}
        if(name) obj.name = name
        if(code) obj.code = code
        if(symbol) obj.symbol = symbol
        if(exchangeRate) obj.exchangeRate =exchangeRate
        await db.currency.findOneAndUpdate({_id:id},{
            $set:obj
        })
  
        res.status(201).end()
  
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
  }
  