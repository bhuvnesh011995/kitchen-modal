const {Schema,model} = require("mongoose")

const schema = new Schema(
    {
    tableNumber:{
        type:String
    },
    seatNumber:{
        type:String,
    },
  status:{
    type:String,
  },
},
{
    collection:"qrbuildertable",
    timestamps:true
})

module.exports = model("qrbuildertable",schema)