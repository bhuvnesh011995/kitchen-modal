const db = require("../models")
const { create_error } = require("../utility/createError")

exports.getMailConfig = async (req,res,next)=>{
    try {
        let mailConfig = await db.mailConfig.findOne({})
        if(!mailConfig) throw create_error(500,"server error mail Configuration not found")
        res.status(200).json(mailConfig)
    } catch (error) {
        next(err)
    }
}


exports.updateMailConfig = async (req,res,next)=>{
    try {
        const {TYPE,USERNAME,HOST,
        PORT,
        PASSWORD,
        ENCRYPTION,
        ADDRESS,
        NAME,
        MAILGUN_SECRET,
        MAILGUN_DOMAIN} = req.body
        let obj = {}
if(TYPE!=undefined) obj.TYPE = TYPE
if(USERNAME!=undefined) obj.USERNAME = USERNAME
if(PORT!=undefined) obj.PORT = PORT
if(HOST!=undefined) obj.HOST = HOST
if(PASSWORD!=undefined) obj.PASSWORD = PASSWORD
if(ADDRESS!=undefined) obj.ADDRESS = ADDRESS
if(ENCRYPTION!=undefined) obj.ENCRYPTION = ENCRYPTION
if(NAME!=undefined) obj.NAME = NAME

if(MAILGUN_SECRET!=undefined) obj.MAILGUN_SECRET = MAILGUN_SECRET
if(MAILGUN_DOMAIN!=undefined) obj.MAILGUN_DOMAIN = MAILGUN_DOMAIN

let emailConfig = await db.mailConfig.findOneAndUpdate({},{$set:obj},{new:true})
res.status(200).json(emailConfig)
    } catch (error) {
        next(error)
    }
}