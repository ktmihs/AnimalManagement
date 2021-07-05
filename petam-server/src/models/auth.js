import mongoose from "mongoose"
const {Schema} = mongoose
const AuthSchema=new Schema({
    username:{
        type: String
    },  // 유저 이름
    email: {
        type: String
    },   // 아이디로 쓰일 이메일
    password: {
        type: String
    }   // 비밀번호
})

const Auth=mongoose.model("Auth",AuthSchema)
export default Auth