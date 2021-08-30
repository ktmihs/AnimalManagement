import mongoose from "mongoose"
const {Schema} = mongoose
const ImageSchema=new Schema({
    filename:{
        type:String
    },  // 파일명
    hospitalname:{
        type:String
    },  // 병원 이미지일 경우, 병원 이름
    productname:{
        type:String
    }   // 제품 이미지일 경우, 제품 이름
})

const Image=mongoose.model("Image",ImageSchema)
export default Image