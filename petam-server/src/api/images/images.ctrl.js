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