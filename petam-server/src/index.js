import Koa from 'koa';
import mongoose from 'mongoose';
import Router from 'koa-router';
import KoaBody from 'koa-body';
// import Cors from 'cors';
import api from './api';

const router = new Router();
const app = new Koa();
const {jwtMiddleware}  = require('lib/token')
const bodyParser = require('koa-bodyparser')

// const cors = new Cors();
// app.use(cors());
var connection = new mongoose.connect('mongodb://localhost:27017/petam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB petam');
  })
  .catch((e) => {
    console.error(e);
  });



// url /api 이면 ./api/index.js가 실행됨.
// router.get('/test', function (req, res) {
//   let data = { name: 'kukaro' };
//   console.log('**********************');
//   console.log(req.headers);
//   console.log('**********************');
//   console.log(req.rawHeaders);
//   console.log('**********************');
//   res.set({ 'access-control-allow-origin': '*' });
//   console.log(res.getHeaders());
//   res.send(data);
// });
app.use(bodyParser()); // 바디파서 적용, 라우터 적용코드보다 상단에 있어야합니다.
app.use(jwtMiddleware);
router.use('/api', api.routes());
app.use(KoaBody());

app.use(router.routes()).use(router.allowedMethods());

const port = 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
