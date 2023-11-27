const {Schema,model} = require("mongoose")


const schema = new Schema({
    name:String,
    username : {
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String,
        unique:true
    },
    role:{
        type:Schema.Types.ObjectId,ref:"roles"
    },
    password:{
        type:String,
        required:true,
    }
},{
    collection:"users",
    timestamps:true
})



module.exports = model("users",schema)