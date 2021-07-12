import Pet from '../../models/pet'

// pet 등록하기
export const write=async(ctx)=>{
    const {
        parent,
        name,
        age,
        gender
    }=ctx.request.body

    const pet=new Pet({
        parent,
        name,
        age,
        gender
    })
    try{
        await pet.save()
    } catch(e){
        return ctx.throw(500,e)
    }
    ctx.body=pet
}

// 모든 반려동물 정보 읽기
export const read=async(ctx)=>{
    let pet
    try{
        pet=await Pet.find().exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=pet
}

// 반려동물 정보 업데이트 (수정할 내용만 변경)
export const update=async(ctx)=>{
    const name=ctx.params
    let pet
    try{
        pet=await Pet.updateOne(name,ctx.request.body,{
            upsert: true,
            new:true
        }).exec()
    } catch(e){
        return ctx.throw(500,e)
    }
    ctx.body=pet
}
// 특정 반려동물 정보 삭제
export const remove=async(ctx)=>{
    const {email,name}=ctx.params
    let pet
    try {
        pet = await Pet.findOneAndDelete(
        { parent: email,name: name }
      )
    } catch (e) {
      ctx.throw(500, e)
    }
    ctx.body=pet
}