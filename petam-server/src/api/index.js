import Router from 'koa-router';
import posts from './posts';
import hospitals from './hospitals'
import reservations from './reservations'

const api = new Router();

// url /posts 이면 ./posts/index.js
api.use('/posts', posts.routes());
api.use('/reservations',reservations.routes())
api.use('/hospitals',hospitals.routes())

// 라우터를 내보냅니다.
export default api;
