import Koa from 'koa';
import mongoose from 'mongoose';
import Router from 'koa-router';
import KoaBody from 'koa-body';

import api from './api';
const router = new Router();
const app = new Koa();

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
router.use('/api', api.routes());

app.use(KoaBody());

app.use(router.routes()).use(router.allowedMethods());
app.use((ctx) => (ctx.body = 'hello world!'));

const port = 4000;
app.listen(port, () => {
  console.log('Listening to port %d', port);
});
