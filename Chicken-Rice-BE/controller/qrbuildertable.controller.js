const db = require("../models")

exports.addTable = async function(req,res,next){
    const {tableNumber,seatNumber,status} = req.body
    console.log(req.body)
    try {
        let obj = {}

        if(tableNumber) obj.tableNumber = tableNumber
        if(seatNumber) obj.seatNumber = seatNumber
        if(status) obj.status =status

        await db.qrbuildertable.create(obj)

        res.status(201).end()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}

exports.getAllTable = async function(req,res,next){
    try {
        let table = await db.qrbuildertable.find()

        if(!table || !table.length) return res.status(201).end()
        
        res.status(200).json({
            success:true,
            table
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}
exports.deleteQrBuilder = async function(req,res,next){
    const {id} = req.params
    try {
        let isExist = await db.qrbuildertable.exists({_id:id})
        
        if(!isExist) return res.status(400).json({
            success:false,
            message:"no qrbuildertable exist"
        })
        
        await db.qrbuildertable.deleteOne({_id:id})
  
        res.status(204).end();
  
    } catch (error) {
        console.error(error)
  
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
  }
  
  exports.updateTable = async function (req, res, next) {
    try {
      const { tableNumber, seatNumber,status } = req.body;
      const { id } = req.params;
      console.log(req.body);
  
      let isExist = await db.qrbuildertable.exists({ _id: id });
  
      if (!isExist) {
        return res.status(400).json({
          success: false,
          message: "No category exists",
        });
      }
  
      let obj = {};
      if (tableNumber) obj.tableNumber = tableNumber;
      if (seatNumber) obj.seatNumber = seatNumber;
      if(status) obj.status =status;
      await db.qrbuildertable.findOneAndUpdate({ _id: id }, { $set: obj });
  
      res.status(201).end();
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Some error occurred",
      });
    }
  };
  