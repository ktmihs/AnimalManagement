import mongoose from "mongoose"
const {Schema} = mongoose
const PetSchema=new Schema({
    parent:{
        type: String
    },  // 보호자 이메일
    name: {
        type: String
    },   // pet 이름
    species: {
        type: String
    },   // pet 종
    age: {
        type: String
    },   // 나이
    gender: {
        type: String
    }   // 성별
})

const Pet=mongoose.model("Pet",PetSchema)
export default Pet