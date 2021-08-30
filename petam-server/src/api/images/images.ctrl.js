import Image from '../../models/image'

// 병원 이미지 볼러오기
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

// 제품 이미지 불러오기
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