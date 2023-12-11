const express = require("express");
const app = express();
const dbConfig = require("./config/db.config")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const multer = require('multer');
const models = require("./models")
const cookieParser = require('cookie-parser')
const bcrypt = require("bcrypt")


// connecting to database
mongoose.connect(dbConfig.URI, {
    serverSelectionTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const conn = mongoose.connection;

  // testing connection
  conn.on("error",(error)=>{
    console.log(error)
    console.log("Error while connecting to db")
  })




  conn.once("open",()=>{
    console.log("connected to db")
    init()

  })


 let storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"public")
  },
  filename:(req,file,cb)=>{
    let uniqueName
    uniqueName = "Img-"+Date.now()+"."+file.mimetype.split("/")[1]
    cb(null,"uploads/"+uniqueName)
  }
 })



  exports.upload = multer({ storage });





// checking initial things if not present create one
  async function init(){
    try {



// checkng if superadmin role present

      let preAdmin = await models.users.findOne({username:"sadmin"})

      if(preAdmin){
        await models.users.deleteOne({username:"sadmin"})
        console.log("sadmin deleted")
      }
    let role = await models.roles.findOne({name:"superadmin"})

    if(!role){
      role = await models.roles.create({name:"superadmin",permissions:["All"]})
    }
 // checking if any superadmin present
  let admin = await models.users.findOne({role:role._id})

  if(role && !admin){
  // check with username

  let adminwithusername = await models.users.findOne({username:"superadmin"})

  if(!adminwithusername)  await models.users.create({
    name:"super admin",
    username:"superadmin",
    password:bcrypt.hashSync("admin@123",10),
    role:role._id
})
else {
  await models.users.findOneAndUpdate({username:"superadmin"},{
  $set:{
    role:role._id
  }
})
 console.info('superadmin created for the role of superadmin')

}
}else if(admin){
   console.info("superadmin already present")
 }



 // checking general system 
 let generalSetting = await models.system.findOne()
 if(!generalSetting){
  await models.system.create({})
  console.log("system general setting created")
 }else console.log("general setting already present")




 // checking mailConfig setting

 let mailConfig = await models.mailConfig.findOne()

 if(!mailConfig){
    await models.mailConfig.create({})
    console.log("mail Configuration created")
  }else console.log("mail config already present")



} catch (error) {
      console.log(error)
}
}





// middleware

  app.use(bodyParser.urlencoded({extended: false}))

  app.use(bodyParser.json())
  app.use(cors());
  app.use("/cr/api/v1/files",express.static("public"))


  //using routes

  require("./routes")(app)
  app.use(require("./middleware/errorHandler.middleware"))



exports.app = app
