const {Schema,model} = require("mongoose")

const schema = new Schema({

name:{
    type:String
},
code:{
   type:String
},

},
{
    collection:"language",
    timestamps:true
})
module.exports=model("language",schema)
