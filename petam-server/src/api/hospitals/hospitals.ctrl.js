import Hospital from "../../models/hospital"

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
        businessNum
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
        businessNum
    })
    try{
        await hospital.save()
    } catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=hospital
}

export const read=async(ctx)=>{
    let hospitals
    try{
        hospitals=await Hospital.find().exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    
    ctx.body=hospitals
}
/*
export const read=async(ctx)=>{
    const hospitals=await Hospital.find()
    ctx.status=200
    ctx.body=hospitals   
}
*/

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
export const readName=async(ctx)=>{
    const name=ctx.params
    let data
    try{
        data=await Hospital.findOne(name).exec()
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


export const remove=async(ctx,next)=>{
    const id=ctx.params
    
    await Hospital.deleteOne({_id:id})
    await next()
}