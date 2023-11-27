const {Schema,model} = require("mongoose")

let schema = new Schema({
    name:{
        type:String,
        required:true
    },
    permissions:[
        {type:String}
    ]
},{
    collection:"roles",
    timestamps:true
})


module.exports = model("roles",schema)