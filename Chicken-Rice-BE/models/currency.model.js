const {Schema,model} = require("mongoose")

const schema = new Schema({

name:{
    type:String
},
symbol:{
   type:String
},
code:{
    type:String
},
exchangeRate:{
   type:String
},
},
{
    collection:"currency",
    timestamps:true
})
module.exports=model("currency",schema)
