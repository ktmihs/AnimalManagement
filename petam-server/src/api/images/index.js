import Router from 'koa-router'
import Image from '../../models/image'
import multer from '@koa/multer'
import {readOne,readProductOne} from './images.ctrl'
const images = new Router()

// 파일 경로 및 이름 설정 옵션
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('file:',`${__dirname}/images/`)
    cb(null, '..//petam//public')
    //cb(null, `${__dirname}/images/`) // 파일 업로드 경로
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, file.originalname) //파일 이름 설정
  }
})

const upload = multer({ storage: storage })  

// 병원 이미지 저장
images.post('/image', upload.single('image'), async(ctx) => {
    const { filename,hospitalname } = ctx.request.body
    const image=new Image({ filename,hospitalname })
    try{
      await image.save()
    } catch(e){
      return ctx.throw(200,e)
    }
    ctx.body = image
})

// 제품 이미지 저장
images.post('/product/image', upload.single('image'), async(ctx) => {
  const { filename,productname } = ctx.request.body
  const image=new Image({ filename,productname })
  try{
    await image.save()
  } catch(e){
    return ctx.throw(200,e)
  }
  ctx.body = image
})

images.get('/image/:hospital',readOne)
images.get('/image/product/:product',readProductOne)

export default images