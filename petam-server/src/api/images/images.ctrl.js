import Image from '../../models/image'

// export const write=async(req,res,next)=>{
//     return console.log(req, req.file)
    
// }
export const write=async(req,res,next)=>{
    console.log(req, req.file)
    const getImage={
        filename:req.body.filename,
        hospitalname:req.body.hospitalname 
    }
    const image=new Image(getImage)
    try{
        await image.save()
    } catch(e){
        return req.throw(500,e)
    }
}
export const readOne=async(ctx)=>{
    const hospital=ctx.params
    let total, image
    try{
        total=await Image.find().exec()
        image=total.filter(item=>item.hospitalname===String(Object.values(hospital)))
    }catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=image[image.length-1]
}

export const readProductOne=async(ctx)=>{
    const product=ctx.params
    let total, image
    try{
        total=await Image.find().exec()
        image=total.filter(item=>item.productname===String(Object.values(product)))
    }catch(e){
        return ctx.throw(200,e)
    }
    ctx.body=image[image.length-1]
}