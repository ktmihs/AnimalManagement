import mongoose from "mongoose"
import autoIncrement from 'mongoose-auto-increment'
autoIncrement.initialize(mongoose.connection);

const {Schema} = mongoose
const ReservationSchema=new Schema({
    no:{
        type: Number
    },  //예약번호
    hostId:{
        type: String
    },  //예약자
    hospitalName:{
        type: String
    },  //병원이름
    type:{
        type: String
    },  //방문목적(선택)
    memo:{
        type: String
    },  //남길 메시지
    dateDay:{
        type: String
    },  //예약 날짜
    reservationTime: {
        type: Date,
        default:Date.now
    }   //예약한 시간(방문일, 시간)
})
ReservationSchema.plugin(autoIncrement.plugin, {
    model: 'Reservation',
    field: 'no',
    startAt: 21060000,
    increment: 1,
  });
const Reservation=mongoose.model("Reservation",ReservationSchema)
export default Reservation