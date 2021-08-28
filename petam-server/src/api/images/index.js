import Router from 'koa-router'
//import {upload} from '../../main'
import Image from '../../models/image'
import Hospital from '../../models/hospital'
import multer from '@koa/multer';
import koaBody from 'koa-body'
import fs from 'fs'
import {write,readOne,readProductOne} from './images.ctrl'
const images = new Router()
//파일을 저장할 디렉토리 설정
// const upload = multer({ 
//     dest: __dirname+'/images/' // 이미지 업로드 경로
// })

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

// images.post('/image',
//     koaBody(), // koaBody를 사용해서 multipart데이터를 허용한다고 설정해준다.
//     (ctx) => {
//         console.log(ctx.request,ctx.request.body)
//         const { title, body } = ctx.request.body; // formdata의 기본적인 text필드들은 ctx.request.body에 값이 들어오고
//         const image = ctx.request.files.image; // file형식은 ctx.request.files에 들어온다. ctx.request.files.[files] 여기서 마지막 files는 내가 키값으로 설정해준 값이다. ex) new form().append('files', ~) 와 같이 키 값을 줬기 때문에 위와같이 접근한것이다.
//         let file
//         file.push(fs.readFileSync(image.path)); // 나는 file들을 formdata로 읽어와 buffer로 데이터베이스에 저장했다.
    
//     })
// images.post('/image',upload.single('image'),write)

images.post('/image', upload.single('image'), async(ctx) => {

    console.log(ctx.request,ctx.request.body)
    const { filename,file,hospitalname } = ctx.request.body
    const image=new Image({ filename,file,hospitalname })
    try{
      await image.save()
    } catch(e){
      return ctx.throw(200,e)
    }
    ctx.body = image
})
images.post('/product/image', upload.single('image'), async(ctx) => {

  console.log(ctx.request,ctx.request.body)
  const { filename,file,productname } = ctx.request.body
  const image=new Image({ filename,file,productname })
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