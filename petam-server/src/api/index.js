import Router from 'koa-router';
import posts from './posts';

const api = new Router();

// url /posts 이면 ./posts/index.js
api.use('/posts', posts.routes());

// 라우터를 내보냅니다.
export default api;
