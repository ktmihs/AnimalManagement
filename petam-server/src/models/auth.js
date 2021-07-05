import mongoose from "mongoose"
const {Schema} = mongoose
const AuthSchema=new Schema({
    username:{
        type: String
    },
    email: {
        type: String
    },   // 아이디로 쓰일 이메일
    password: {
        type: String
    }
})

const Auth=mongoose.model("Auth",AuthSchema)
export default Auth