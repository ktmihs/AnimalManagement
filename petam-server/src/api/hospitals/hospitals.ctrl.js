import Hospital from "../../models/hospital"

export const write=async(ctx, next)=>{
    const {
        id,
        pw,
        name,
        phone,
        address,
        score,
        businessNum
    }=ctx.request.body

    const hospital=new Hospital({
        id,
        pw,
        name,
        phone,
        address,
        score,
        businessNum
    })
    await hospital.save()
    ctx.body=hospital
    
    await next()
}

export const read=async(ctx, next)=>{
    const data=await Hospital.find()
    ctx.status=200
    ctx.body=data

    await next()
}

export const readOne=async(ctx, next)=>{
    const id=ctx.params
    const data=await Hospital.findOne({_id:id})

    ctx.status=200
    ctx.body=data

    await next()
}

export const remove=async(ctx,next)=>{
    const id=ctx.params
    
    await Hospital.deleteOne({_id:id})
    await next()
}