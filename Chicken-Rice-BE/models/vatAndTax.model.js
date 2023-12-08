const {Schema,model} = require("mongoose")

const schema = new Schema({
    name:{
        type:String
    },
    value:{
        type:String
    },
    status:{
        type:String,
        default:"inactive"
    }
},{collection:"vatAndTax"})

module.exports = model("vatAndTax",schema)