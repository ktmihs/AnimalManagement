import Hospital from "../../models/hospital"

// 병원 등록
export const write=async(ctx)=>{
    const {
        id,
        pw,
        name,
        tel,
        old_addr,
        new_addr,
        zip_code,
        score,
        count,
        company_number
    }=ctx.request.body

    const hospital=new Hospital({
        id,
        pw,
        name,
        tel,
        old_addr,
        new_addr,
        zip_code,
        score,
        count,
        company_number
    })
    try{
        await hospital.save()
    } catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=hospital
}

// 모든 병원 정보 검색
export const read=async(ctx)=>{
    let hospitals
    try{
        hospitals=await Hospital.find().exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    
    ctx.body=hospitals
}

// 병원 이름 중 특정 이름만 검색
export const filter=async(ctx)=>{       // 병원 검색 시 사용하는 get
    const filter=ctx.params             // 입력 받은 단어(params)
    let total, hospitals
    try{
        total=await Hospital.find().exec()  // 모든 데이터 조회 후
        hospitals=total.filter(item=>item.name.includes(Object.values(filter))) //모든 병원 이름 중 입력받은 단어를 포함하는 것만 필터링
    }catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=hospitals
}

// 특정 아이디로 하나만 검색
export const readOne=async(ctx)=>{
    const id=ctx.params
    let data
    try{
        data=await Hospital.findById(id).exec()
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
export const readLast=async(ctx)=>{
  let hospitals,one
    try{
        hospitals=await Hospital.find().exec()
        one=[hospitals[hospitals.length-4],hospitals[hospitals.length-3]]
    }catch(e){
        return ctx.throw(200,e)
    }
    
    ctx.body=one
}

// 특정 이름으로 하나만 검색
export const readName=async(ctx)=>{
    const name=ctx.params
    let data
    try{
        data=await Hospital.findOne(name).exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    if(!data){
        data='x'
        // ctx.status=404
        // ctx.body={message:'data not found'}
        // return 
    }
    ctx.body=data
}

// 사업자 등록번호로 하나만 검색
export const readCompany=async(ctx)=>{
    const company_number=ctx.params
    let data
    try{
        data=await Hospital.findOne(company_number).exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    if(!data){
        data='x'
        // ctx.status=404
        // ctx.body={message:'data not found'}
        // return 
    }
    ctx.body=data
}

// 병원 정보 업데이트 (수정할 내용만 변경)
export const update=async(ctx)=>{
    const id=ctx.params
    let hospital
    try{
        hospital=await Hospital.updateOne(id,ctx.request.body,{
            upsert: true,
            new:true
        }).exec()
    } catch(e){
        return ctx.throw(500,e)
    }
    ctx.body=hospital
}

// 특정 병원 정보 삭제
export const remove=async(ctx,next)=>{
    const id=ctx.params
    
    await Hospital.deleteOne({_id:id})
    await next()
}

// 병원에서 예약된 시간 추가
export const updateTime = async (ctx) => {
    const { _id, reservationTime } = ctx.params
    let hospital
    try {
      console.log('_id: ', _id)
      console.log('reservationTime : ', reservationTime)
      hospital = await Hospital.findOneAndUpdate(
        { _id: _id },
        {
          $addToSet: {
            reservationTime: reservationTime,
          }
        }
      ).exec()
    } catch (e) {
      ctx.throw(500, e)
    }
    ctx.body = hospital
  }

  // 병원에서 예약된 시간 삭제
  export const removeTime = async (ctx) => {
    const { _id, reservationTime } = ctx.params
    let hospital
    try {
        hospital = await Hospital.findOneAndUpdate(
        { _id: _id },
        {
          $pull: {
            reservationTime: reservationTime
          }
        }
      )
    } catch (e) {
      ctx.throw(500, e)
    }
    ctx.body = hospital
  }
  

export const updateProduct = async (ctx) => {
  const { _id, productId, price } = ctx.params; // id로 하면 안됨.. _id로 해야 됨..
  let hospital;
  try {
    console.log('_id: ', _id);
    console.log('productId : ', productId);
    hospital = await Hospital.findOneAndUpdate(
      // _id,
      { _id: _id },
      {
        $addToSet: {
          products: {
            productId: productId,
            price: price,
          },
        },
      },
    ).exec();
  } catch (e) {
    ctx.throw(500, e);
  }
  ctx.body = hospital;
  console.log('ctx.body:', ctx.body);
};

export const removeProduct = async (ctx) => {
  const { _id, productId } = ctx.params;
  let hospital;
  try {
    hospital = await Hospital.findOneAndUpdate(
      { _id: _id },
      {
        $pull: {
          products: { productId: productId },
        },
      },
    );
  } catch (e) {
    ctx.throw(500, e);
  }
  ctx.body = hospital;

  console.log('ctx.body:', ctx.body);
};