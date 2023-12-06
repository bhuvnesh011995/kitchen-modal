const db = require("../models");

exports.addAddons = async function(req,res,next){
    const {addonsName} = req.body
    try {
        let obj = {}

        if(addonsName) obj.addonsName = addonsName
        await db.addons.create(obj)

        res.status(201).end()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}


exports.getAllAddons= async function(req,res,next){
  try {
      let addons = await db.addons.find()

      if(!addons || !addons.length) return res.status(201).end()
      
      res.status(200).json({
          success:true,
          addons
      })
  } catch (error) {
      console.error(error)

      res.status(500).json({
          success:false,
          message:"some error occured"
      })
  }
}

exports.deleteAddons = async function (req, res, next) {
    const { id } = req.params;
    try {
      const isExist = await db.addons.exists({ _id: id });
  
      if (!isExist) {
        return res.status(404).json({
          success: false,
          message: "Addons not found",
        });
      }
  
      await db.addons.deleteOne({ _id: id });
  
      res.status(204).end();
    } catch (error) {
      console.error(error);
  
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  };

exports.updateAddons = async function (req,res,next){
  try {
      let {addonsName,status} = req.body
      const {id} = req.params
      
      let isExist = await db.addons.exists({_id:id})
      
      if(!isExist) return res.status(400).json({
          success:false,
          message:"no addons exist"
      })

      let obj = {}
      if(addonsName) obj.addonsName = addonsName
      if(status!=undefined) obj.status = status
      await db.addons.findOneAndUpdate({_id:id},{
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

