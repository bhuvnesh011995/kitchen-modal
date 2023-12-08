const {Schema,model} = require("mongoose")

const schema = new Schema({
    TYPE:{
        type:String,
        default:""
    },
    HOST:{
        type:String,
        default:""
    },
    PORT:{
        type:Number,
        default:""
    },
    USERNAME:{
        type:String,
        default:""
    },
    PASSWORD:{
        type:String,
        default:""
    },
    ENCRYPTION:{
        type:String,
        default:""
    },
    ADDRESS:{
        type:String,
        default:""
    },
    NAME:{
        type:String,
        default:""
    },
    MAILGUN_SECRET:{
        type:String,
        default:""
    },
    MAILGUN_DOMAIN:{
        type:String,
        default:""
    }
},{
    collection:"mailConfig"
})


module.exports = model("mailConfig",schema)