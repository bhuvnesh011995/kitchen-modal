const {Schema,model} = require("mongoose")


const schema = new Schema({
    title:{
        type:String,
        default : null
    },
    shortTitle:{
        type:String,
        default : null
    },
    systemName:{
        type:String,
        default : null
    },
    logo:{
        type:String,
        default : null
    },
    fevicon:{
        type:String,
        default : null
    },
    systemLogo:{
        type:String,
        default : null
    },

},{
    collection:"system"
})

module.exports = model("system",schema)