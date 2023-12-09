const {Schema,model} = require("mongoose")

const schema = new Schema({
  
    recipeName:{
    type:String
}, 
 file:{
    type:String
},
 
category:{
    type:Schema.Types.ObjectId,ref:"categories"
},

defaultPrice:{
    type:String
},
addonsName: [{ type: Schema.Types.ObjectId, ref: "addons" }],


discount:{
    type:String
},

description:{
    type:String
},
ingredients:{
    type:String
},
status:{
    status: { type: Boolean, required: false },

}
},
{
    collection:"product",
    timestamps:true
})
module.exports=model("product",schema)
