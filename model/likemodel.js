const mongoose = require("mongoose");

// rputehandkler
const likeSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    }

})


//exporting 
module.exports = mongoose.model("Like",likeSchema);