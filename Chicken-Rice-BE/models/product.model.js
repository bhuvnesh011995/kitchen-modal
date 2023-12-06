const {Schema,model} = require("mongoose")

const schema = new Schema({
  
productName:{
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
addonsName: [{ type: String }],

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
