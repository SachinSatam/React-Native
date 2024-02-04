const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    UID:{
        type:String,
        required:true,
        unique:true
    },
    Authenticated:{
        type:Boolean,
        default:false
    },
    viewedItems: [
        {
          itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
          },
          timestamp: {
            type: Date,
            default: Date.now,
          },
          itemCity:{
            type:String

          }
        },
      ],
      timeOnItems: [
        {
          itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
          },
          duration: {
            type: Number, // in seconds or milliseconds, depending on your preference
            default: 0,
          },
          lastViewed: {
            type: Date,
            default: Date.now,
          },
        },
      ],
})
const User=mongoose.model("User",userSchema)
module.exports=User