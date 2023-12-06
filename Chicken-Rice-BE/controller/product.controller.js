const db = require("../models");

exports.addProduct = async function (req, res, next) {
  const {productName,category,defaultPrice,description,ingredients,addonsName, status} = req.body;
  console.log(req.body)
  try {
    if(category &&  !await db.categories.exists({_id:category})) return res.status(400).json({
      success:false,
      message:"no category exist"
  })
 
    let obj = {};
    if (productName) obj.productName = productName;
    if (category) obj.category = category;
    if (defaultPrice) obj.defaultPrice = defaultPrice;
    if (description) obj.description = description;
    if (ingredients) obj.ingredients = ingredients;
    if(addonsName) obj.addonsName = addonsName
    if (status!=undefined) obj.status = status;
    if(req.file) obj.file = req.file.filename
    await db.product.create(obj);

    res.status(201).json({
      success: true,
      message: "Subcategory created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};


exports.getAllProduct = async (req,res,next)=>{
  
  try {
    let product = await db.product
    .find({})
    .populate({
      path: "category",
      select: "name",
    });

      if(!product || !product.length) return res.status(201).end()

      res.status(200).json({
          success:true,
          product
      })
  } catch (error) {
      console.error(error)

      res.status(500).json({
          success:false,
          message:"some error occured"
      })
  }
}



exports.deleteProduct = async function(req,res,next){
  const {id} = req.params
  try {
      let isExist = await db.product.exists({_id:id})
      
      if(!isExist) return res.status(400).json({
          success:false,
          message:"no product exist"
      })
      
      await db.product.deleteOne({_id:id})

      res.status(204).end();

  } catch (error) {
      console.error(error)

      res.status(500).json({
          success:false,
          message:"some error occured"
      })
  }
}
exports.updateProduct = async function (req,res,next){
  let { productName,category,defaultPrice,description,ingredients,addonsName,status} = req.body
      const {id} = req.params
       console.log(req.body)
  try {
      
      if(category &&  !await db.categories.exists({_id:category})) return res.status(400).json({
        success:false,
        message:"no category exist"
    })
      let isExist = await db.product.exists({_id:id})
      
      if(!isExist) return res.status(400).json({
          success:false,
          message:"no product exist"
      })

      let obj = {}
      if (productName) obj.productName = productName;
      if (category) obj.category = category;
      if (defaultPrice) obj.defaultPrice = defaultPrice;
      if (description) obj.description = description;
      if (ingredients) obj.ingredients = ingredients;
      if (addonsName) obj.addonsName = addonsName;
      if(req.file) obj.file = req.file.filename
      if(status!=undefined) obj.status = status
      await db.product.findOneAndUpdate({_id:id},{
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
