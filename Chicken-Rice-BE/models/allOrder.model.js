const {Schema,model} = require("mongoose")

const schema = new Schema({
    
orderId:{
    type:String
},
customerName:{
   type: String
},
 payMentMode:{
    type: String
},
product:{
    type: String
 },
 addons:{       
     type: String
  },
  size:{
     type: String
 }, 
 note:{
    type: String
},
qty:{

},
status:{
    type: String
},
cost:{
    type:String
},
email:{
    type: String
},
contact:{
    type:String
},
totalcosts:{
    type:String
}
},
{
    collection:"allOrder",
    timestamps:true
})
module.exports=model("allOrder",schema)
