const db = require("../models")


exports.addNewRecipe = async (req,res,next)=>{
    const {name,category,description,ingradients,totalcost,extracharges,file} = req.body
    console.log("Data from the frontend:", req.body);
    try {
        if(category &&  !await db.categories.exists({_id:category})) return res.status(400).json({
            success:false,
            message:"no category exist"
        })

        let obj = {};

        if(name) obj.name = name
        if(description) obj.description = description
        if(category) obj.category = category
        if(ingradients || ingradients?.length) obj.ingradients = ingradients
        if(totalcost) obj.totalcost = totalcost
        if(extracharges || extracharges?.length) obj.extracharges = extracharges
        if(req.file) obj.photo = req.file.filename

        await db.recipes.create(obj)
         console.log("RECIPE",obj)
        res.status(201).end()

    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}


exports.getAllRecipes = async (req,res,next)=>{
    try {
        let recipes = await db.recipes.find({}).populate({path:"category",select:"name"})

        if(!recipes || !recipes.length) return res.status(201).end()

        res.status(200).json({
            success:true,
            recipes
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}




exports.updateRecipe = async (req,res,next)=>{
    const {id} = req.params;

    try {

        if(! await db.recipes.exists({_id:id})) return res.status(400).json({
            success:false,
            message:"no recipe exist"
        })


        const {name,category,description,ingradients,totalcost,extracharges} = req.body


        if(category &&  !await db.categories.exists({_id:category})) return res.status(400).json({
            success:false,
            message:"no category exist"
        })

        let obj = {};

        if(name) obj.name = name
        if(description) obj.description = description
        if(category) obj.category = category
        if(ingradients || ingradients?.length) obj.ingradients = ingradients
        if(totalcost) obj.totalcost = totalcost
        if(extracharges || extracharges?.length) obj.extracharges = extracharges


        await db.recipes.findOneAndUpdate({_id:id},{
            $set:obj
        })

        res.status(201).end()

    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}




exports.deleteRecipe = async (req,res,next)=>{
    const {id} = req.params
    try {
        if(! await db.recipes.exists({_id:id})) return res.status(400).json({
            success:false,
            message:"no recipe exist"
        })

        await db.recipes.findOneAndDelete({_id:id})

        res.sendStatus(204)

    } catch (error) {
        console.error(error)

        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}