const {Schema,model} = require("mongoose")


const schema = new Schema(
    {
    name:{
        type:String
    },
    photo:{
        type:String
    },
    status:{
        type:Boolean
    }

},
{
    collection:"categories",
    timestamps:true
})



module.exports = model("categories",schema)