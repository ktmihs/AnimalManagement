import Router from 'koa-router';
import posts from './posts';
import comments from './comments';
import hospitals from './hospitals'
import reservations from './reservations'
import auth from './auth'

const api = new Router();

// url /posts 이면 ./posts/index.js

api.use('/posts', posts.routes());
api.use('/comments', comments.routes());

api.use('/auth',auth.routes())

api.use('/reservations',reservations.routes())
api.use('/hospitals',hospitals.routes())

// 라우터를 내보냅니다.
export default api;
