import Reservation from "../../models/reservation"

export const write=async(ctx, next)=>{
    const {
        id,
        type,
        memo,
        reservationTime
    }=ctx.request.body
    const reservation=new Reservation({
        id, 
        type, 
        memo, 
        reservationTime
    })
    await reservation.save()
    ctx.body=reservation
    
    await next()
}

export const read=async(ctx, next)=>{
    const data=await Reservation.find()
    ctx.status=200
    ctx.body=data

    await next()
}

export const readOne=async(ctx, next)=>{
    const id=ctx.params
    const data=await Reservation.findOne({_id:id})

    ctx.status=200
    ctx.body=data

    await next()
}

export const remove=async(ctx,next)=>{
    const id=ctx.params
    
    await Reservation.deleteOne({_id:id})
    await next()
}