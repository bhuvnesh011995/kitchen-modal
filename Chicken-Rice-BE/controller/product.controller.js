const db = require("../models");
exports.addProduct = async function (req, res, next) {
  const { recipeName, category, defaultPrice, description, ingredients, addonsName, status } = req.body;
  console.log(req.body);

  try {
    if (category && !(await db.categories.exists({ _id: category }))) {
      return res.status(400).json({
        success: false,
        message: "No category exists",
      });
    }

    let addonIds = []; 

    if (addonsName) {
      const parsedAddons = JSON.parse(addonsName);
      addonIds = await Promise.all(parsedAddons.map(async (addonId) => {
        const addon = await db.addons.findOne({ _id: addonId });
        return addon ? addon._id : null;
      }));

      if (addonIds.includes(null)) {
        return res.status(400).json({
          success: false,
          message: "One or more addons do not exist",
        });
      }
    }

    let obj = {
      recipeName,
      category,
      defaultPrice,
      description,
      ingredients,
      addonsName: addonIds, 
      status,
    };
    if (req.file) obj.file = req.file.filename;
    await db.product.create(obj);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {
    next(error)
}
};


exports.getAllProduct = async (req,res,next)=>{
  
  try {
    let product = await db.product
    .find({})
    .populate({
      path: "addonsName",
      select: "addonsName",
    })
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
    next(error)
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

  }catch (error) {
    next(error)
}
}
exports.updateProduct = async function (req,res,next){
  let { recipeName,category,defaultPrice,description,ingredients,addonsName,status} = req.body
      const {id} = req.params
       console.log(req.body)
       try {
        if (category && !(await db.categories.exists({ _id: category }))) {
          return res.status(400).json({
            success: false,
            message: "No category exists",
          });
        }
    
        let addonIds = []; 
    
        if (addonsName) {
          const parsedAddons = JSON.parse(addonsName);
    
          addonIds = await Promise.all(parsedAddons.map(async (addonId) => {
            const addon = await db.addons.findOne({ _id: addonId });
            return addon ? addon._id : null;
          }));
    
          if (addonIds.includes(null)) {
            return res.status(400).json({
              success: false,
              message: "One or more addons do not exist",
            });
          }
        }
    
        let obj = {
          recipeName,
          category,
          defaultPrice,
          description,
          ingredients,
          addonsName: addonIds, 
          status,
        };
        if (req.file) obj.file = req.file.filename;
      if(status!=undefined) obj.status = status

      await db.product.findOneAndUpdate({_id:id},{
          $set:obj
      })

      res.status(201).end()

  } catch (error) {
    next(error)
}
}
