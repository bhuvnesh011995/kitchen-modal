const db = require("../models")

exports.addAllOrder = async function(req,res,next){
    const {orderId,customerName,payMentMode,status,product,addons,size,note,qty,cost,totalcosts,contact,email} = req.body
    console.log(req.body)
    try {
       
        let obj = {}
        if(orderId) obj.orderId = orderId
        if(qty) obj.qty = qty
        if(customerName) obj.customerName = customerName
        if(product) obj.product = product
        if(addons) obj.addons = addons
        if(size) obj.size = size
        if(note) obj.note =note
        if(cost) obj.cost =cost
        if(totalcosts) obj.totalcosts = totalcosts
        if(payMentMode) obj.payMentMode = payMentMode
        if(status) obj.status = status
        if(email) obj.email = email
        if(contact) obj.contact = contact

        await db.allOrder.create(obj)

        res.status(201).end()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}


exports.getAllOrder = async function(req,res,next){
    try {
        let allOrder = await db.allOrder.find()

        if(!allOrder || !allOrder.length) return res.status(201).end()
        
        res.status(200).json({
            success:true,
            allOrder
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}