const {Schema,model} = require("mongoose")

const schema = new Schema({

addonsName:{
    type:String
},
status:{
    type:Boolean
}

},
{
    collection:"addons",
    timestamps:true
})
module.exports = model("addons",schema)
