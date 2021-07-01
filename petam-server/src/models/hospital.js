import mongoose from "mongoose"
const {Schema} = mongoose
const HospitalSchema=new Schema({
    pw:{
        type: String
    },  //로그인 비밀번호
    name:{
        type: String
    },  //병원이름
    tel: {
        type: String
    },   //전화번호
    old_addr: {
        type: String
    },  //지번주소
    new_addr: {
        type: String
    },  //도로명주소
    zip_code: {
        type: String
    },  //우편번호
    score: {
        type: String
    },  //평점
    company_number: {
        type: String
    },  //사업자 등록번호
    image:{
        type: []
    },  //병원 이미지
    reservation: [{
        reservationId:String,
        reservationTime:String
    }], //예약 정보
    products: [{
        productId:String,
        price:Number
    }]  //등록 제품 정보
})

const Hospital=mongoose.model("Hospital",HospitalSchema)
export default Hospital