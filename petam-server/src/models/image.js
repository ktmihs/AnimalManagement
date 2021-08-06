import mongoose from "mongoose"
const {Schema} = mongoose
const ImageSchema=new Schema({
    filename:{
        type:String
    },
    file:{
        
    },
    hospitalname:{
        type:String
    }
})

const Image=mongoose.model("Image",ImageSchema)
export default Image