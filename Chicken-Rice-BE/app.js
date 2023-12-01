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
    console.log(file)
    uniqueName = "Img-"+Date.now()+"."+file.mimetype.split("/")[1]
    cb(null,"uploads/"+uniqueName)
  }
 })


  
  exports.upload = multer({ storage });



  

// checking initial things if not present create one
  async function init(){

// checkng if superadmin role present 

    let role = await models.roles.findOne({name:"superadmin"})

    if(!role){
      role = await models.roles.create({name:"superadmin",permissions:["All"]})
    }
 // checking if any superadmin present
 let admin = await models.users.findOne({role:role._id})

if(role && !admin){
  // check with username

  let adminwithusername = await models.users.findOne({username:"sadmin"})

  if(!adminwithusername)  await models.users.create({
    name:"super admin",
    username:"sadmin",
    password:bcrypt.hashSync("123456789",10),
    role:role._id
})
else {
  await models.users.findOneAndUpdate({username:"sadmin"},{
  $set:{
    role:role._id
  }
})
return console.info('superadmin created for the role of superadmin')

}
}

 else if(admin){
    return console.info("superadmin already present")
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
