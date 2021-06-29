import mongoose from "mongoose"
const {Schema} = mongoose
const HospitalSchema=new Schema({
    id:{
        type: String
    },  //예약번호
    pw:{
        type: String
    },  //방문목적(선택)
    name:{
        type: String
    },  //남길 메시지
    tel: {
        type: String
    },   //예약한 시간(방문일, 시간)
    old_addr: {
        type: String
    },
    new_addr: {
        type: String
    },
    zip_code: {
        type: String
    },
    score: {
        type: String
    },
    company_number: {
        type: String
    },
    image:{
        type: []
    },
    products: [{
        productId:String,
        price:Number
    }]
})

const Hospital=mongoose.model("Hospital",HospitalSchema)
export default Hospital