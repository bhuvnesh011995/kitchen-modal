const {Schema,model}= require("mongoose")



const extrachargeSchema = new Schema({
    title:{
        type:String
    },
    cost:{
        type:Number
    },
    photo:{
        type:String
    },
},
{
    _id:false
})

const ingradientSchema = new Schema({
    name:{
        type:String,
        lowercase:true,
        trim:true
    },
    quantity:{
        type:Number
    },
    photo:{
        type:String
    },
    uom:{
        type:String,
        lowercase:true,
        trim:true,
        enum:["piece","ml","cl","kg","g","l"]
    },
    cost:{
        type:Number
    }
},{
    _id:false
})




const schema = new Schema({
    name:{
        type:String,
        lowercase: true,
        trim:true
    },
    photo:{
        type:String
    },
    category:{
        type:Schema.Types.ObjectId,ref:"categories"
    },

    description:{
        type:String,
        trim:true
    },
    ingradients:[ingradientSchema],
    totalcost:{
        type:Number
    },
    extracharges:[extrachargeSchema]
},{
    collection:"recipes",
    timestamps:true
})





module.exports = model("recipes",schema)