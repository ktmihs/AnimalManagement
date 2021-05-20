import mongoose from "mongoose"
const  Schema  = mongoose
const ReservationSchema=new Schema({
    id:{
        type: String
    },  //예약번호
    type:{
        type: String
    },  //방문목적(선택)
    memo:{
        type: String
    },  //남길 메시지
    reservationTime: {
        type: Date
    }   //예약한 시간(방문일, 시간)
})

const Reservation=mongoose.model("Reservation",ReservationSchema)
export default reservation