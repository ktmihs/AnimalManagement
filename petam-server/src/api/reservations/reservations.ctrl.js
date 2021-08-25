import Reservation from "../../models/reservation";

// 예약하기
export const write=async(ctx, next)=>{
    const {
        no,
        hostId,
        hospitalName,
        pet,
        type,
        memo,
        dateDay,
        reservationTime,
        check
    }=ctx.request.body
    const reservation=new Reservation({
        no, 
        hostId,
        hospitalName,
        pet,
        type, 
        memo,
        dateDay, 
        reservationTime,
        check
    })
    try{
        await reservation.save()
    } catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=reservation
    
    await next()
}

// 모든 예약 읽기
export const read=async(ctx)=>{
    let reservation
    try{
        reservation=await Reservation.find().exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    
    ctx.body=reservation
}

// id로 특정 예약 하나 가져오기
export const readOne=async(ctx)=>{
    const id=ctx.params
    let data
    try{
        data=await Reservation.findById(id).exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    if(!data){
        ctx.status=404
        ctx.body={message:'data not found'}
        return
    }
    ctx.body=data
}

// 병원 이름으로 가져오기
export const hospital=async(ctx)=>{
    const name=ctx.params
    let data
    try{
        data=await Reservation.findOne(name).exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    if(!data){
        ctx.status=404
        ctx.body={message:'data not found'}
        return
    }
    ctx.body=data
}

export const readName=async(ctx)=>{
    const hostId=ctx.params
    let data
    try{
        data=await Reservation.findOne(hostId).exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    if(!data){
        ctx.status=404
        ctx.body={message:'data not found'}
        return
    }
    ctx.body=data
}

// 개인이 예약한 내역만 가져오기(진료X)
export const filter=async(ctx)=>{       
    const filter=ctx.params             // 입력 받은 단어(params)
    let total, reservation
    try{
        total=await Reservation.find().exec()  // 모든 데이터 조회 후
        reservation=total.filter(item=>item.hostId.includes(Object.values(filter))&& !item.check) // 예약한 내역 중 아직 진료 받지 않은 데이터
        reservation=reservation.sort((a,b)=>    // 시간 순서대로 정렬
                    Number(a.dateDay.split('.')[0])-Number(b.dateDay.split('.')[0]) 
                    || Number(a.dateDay.split('.')[1])-Number(b.dateDay.split('.')[1]) 
                    || Number(a.dateDay.split('.')[2].split(':')[0])-Number(b.dateDay.split('.')[2].split(':')[0])
                    || Number(a.dateDay.split('.')[2].split(':')[1])-Number(b.dateDay.split('.')[2].split(':')[1]) 
                )
    }catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=reservation
}
// 개인이 예약한 내역만 가져오기(진료O)
export const filterComplete=async(ctx)=>{       
    const filter=ctx.params             // 입력 받은 단어(params)
    let total, reservation
    try{
        total=await Reservation.find().exec()  // 모든 데이터 조회 후
        reservation=total.filter(item=>item.hostId.includes(Object.values(filter))&& item.check) // 예약한 내역 중 진료를 받은 데이터
        reservation=reservation.sort((a,b)=>    // 시간 순서대로 정렬
                    Number(a.dateDay.split('.')[0])-Number(b.dateDay.split('.')[0]) 
                    || Number(a.dateDay.split('.')[1])-Number(b.dateDay.split('.')[1]) 
                    || Number(a.dateDay.split('.')[2].split(':')[0])-Number(b.dateDay.split('.')[2].split(':')[0])
                    || Number(a.dateDay.split('.')[2].split(':')[1])-Number(b.dateDay.split('.')[2].split(':')[1]) 
                )
    }catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=reservation
}

// 병원에 예약된 내역만 가져오기(진료X)
export const hspfilter=async(ctx)=>{       
    const filter=ctx.params             // 입력 받은 단어(params)
    let total, reservation
    try{
        total=await Reservation.find().exec()  // 모든 데이터 조회 후
        reservation=total.filter(item=>item.hospitalName.includes(Object.values(filter))&& !item.check) // 진료 받지 않은 해당 병원의 모든 예약 데이터
        reservation=reservation.sort((a,b)=>    // 시간 순서대로 정렬
                    Number(a.dateDay.split('.')[0])-Number(b.dateDay.split('.')[0]) 
                    || Number(a.dateDay.split('.')[1])-Number(b.dateDay.split('.')[1]) 
                    || Number(a.dateDay.split('.')[2].split(':')[0])-Number(b.dateDay.split('.')[2].split(':')[0])
                    || Number(a.dateDay.split('.')[2].split(':')[1])-Number(b.dateDay.split('.')[2].split(':')[1]) 
                )
    }catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=reservation
}

// 병원에 예약된 내역만 가져오기(진료O)
export const hspfilterComplete=async(ctx)=>{       
    const filter=ctx.params             // 입력 받은 단어(params)
    let total, reservation
    try{
        total=await Reservation.find().exec()  // 모든 데이터 조회 후
        reservation=total.filter(item=>item.hospitalName.includes(Object.values(filter))&& item.check) // 진료 받은 데이터
    }catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=reservation
}

// 진료 완료 체크
export const check = async (ctx) => {
    const { _id } = ctx.params
    let reservation
    try {
      console.log('_id: ', _id)
      reservation = await Reservation.findOneAndUpdate(
        { _id: _id },
        { check:true }
      ).exec()
    } catch (e) {
      ctx.throw(500, e)
    }
    ctx.body = reservation
  }

export const remove=async(ctx,next)=>{
    const id=ctx.params
    
    await Reservation.deleteOne({_id:id})
    await next()
}
// 후기 작성 완료 체크
export const postCheck = async (ctx) => {
  const { _id } = ctx.params;
  let reservation;
  try {
    console.log('_id: ', _id);
    reservation = await Reservation.findOneAndUpdate(
      { _id: _id },
      { postCheck: true },
    );
      console.log("reservation: ", reservation)
  } catch (e) {
    ctx.throw(500, e);
  }
  ctx.body = reservation;
};
export const postReservation = async (ctx) => {
    const { hostId } = ctx.params;
    let reservation
    try {
        console.log(" 환자 아이디 : ", hostId)

          reservation = await Reservation.find({
            $and: [{ hostId: hostId }, { check: true }, { postCheck: false }],
          });
        
        console.log(reservation)
    } catch (e) {
      ctx.throw(500, e)
    }
    ctx.body = reservation
  }
