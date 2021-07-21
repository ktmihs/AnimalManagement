import mongoose from "mongoose"
const {Schema} = mongoose
const HospitalSchema=new Schema({
    password:{
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
        type: Number,
        default: 0,
    }, // 총 평점
    count: {
        type: Number,
        default: 0,
    }, // 리뷰 갯수
    company_number: {
        type: String
    },  //사업자 등록번호
    image:{
        type: []
    },  //병원 이미지
    timeList:{
        openHour:{ Number },
        openMinute:{ Number },
        closeHour:{ Number },
        closeMinute:{ Number },
        lunchOpenHour:{ Number },
        lunchOpenMinute:{ Number },
        lunchCloseHour:{ Number },
        lunchCloseMinute:{ Number }
    },  // 병원 운영시간, 점심시간
    reservationTime: [], //예약 정보
    products: [
    {
        productId: String,
        price: Number,
      }, // 병원에서 판매하는 제품의 ID와 판매가
    ],
})
const Hospital=mongoose.model("Hospital",HospitalSchema)
export default Hospital