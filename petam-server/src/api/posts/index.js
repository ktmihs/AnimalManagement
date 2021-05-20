import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();
posts.post('/', postsCtrl.write);

// posts.get('/', postsCtrl.list);
// post.get('/', postsCtrl.read);
// post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// post collection에 데이터 삽입 
// posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;
