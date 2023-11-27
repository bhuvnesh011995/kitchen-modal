const db = require("../models")
const fixed = require('../models/fixed.model');
exports.addFixed = async function (req, res, next) {
    const {
        category,
        name,
        code,
        working,
        assign,
        company,
        purchaseDate,
        invoiceNumber,
        manufacturer,
        serialNumber,
        note,
        file,
    } = req.body;
    try {
        let obj = {}
        if(category) obj.category = category
        if(name) obj.name = name
        if(code) obj.code = code
        if(assign) obj.assign = assign
        if(working) obj.working = working
         if(company) obj.company = company
        if(purchaseDate) obj.purchaseDate = purchaseDate
         if(invoiceNumber) obj.invoiceNumber = invoiceNumber
        if(manufacturer) obj.manufacturer = manufacturer 
        if(serialNumber) obj.serialNumber = serialNumber
        if(note) obj.note = note
        if(req.file) obj.photo = req.file.filename


        await db.fixed.create(obj)

        res.status(201).end()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}
exports.getFixedItems = async function (req, res, next) {
    try {
       
        const fixedItems = await fixed.find(); 


        res.status(200).json(fixedItems);
    } catch (error) {
        next(error);
    }
}

exports.delateFixed = async function(req,res,next){
    const {id} = req.params
    console.log(req.param)
    try {
        let isExist = await db.fixed.exists({_id:id})
        
        if(!isExist) return res.status(400).json({
            success:false,
            message:"no fixed exist"
        })

        await db.fixed.deleteMany({fixed:id})

        await db.fixed.deleteOne({_id:id})

        res.status(204).end();

    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}

exports.delateFixeds = async function(req,res,next){
    const {id} = req.params
    console.log(req.param)
    try {
        let isExist = await db.fixed.exists({_id:id})
        
        if(!isExist) return res.status(400).json({
            success:false,
            message:"no fixed exist"
        })

        await db.customer.deleteMany({fixed:id})

        await db.customer.deleteOne({_id:id})

        res.status(204).end();

    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}