import mongoose from "mongoose"
const {Schema} = mongoose
const AuthSchema=new Schema({
    username:{
        type: String
    },
    email: {
        type: String
    },   //예약한 시간(방문일, 시간)
    password: {
        type: String
    }
})

const Auth=mongoose.model("Auth",AuthSchema)
export default Auth