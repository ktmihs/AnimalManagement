import Reservation from "../../models/reservation"

export const write=async(ctx, next)=>{
    const {
        id,
        hostId,
        type,
        memo,
        reservationTime
    }=ctx.request.body
    const reservation=new Reservation({
        id, 
        hostId,
        type, 
        memo, 
        reservationTime
    })
    try{
        await reservation.save()
    } catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=reservation
    
    await next()
}

export const read=async(ctx)=>{
    let reservation
    try{
        reservation=await Reservation.find().exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    
    ctx.body=reservation
}

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

export const remove=async(ctx,next)=>{
    const id=ctx.params
    
    await Reservation.deleteOne({_id:id})
    await next()
}