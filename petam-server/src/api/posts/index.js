import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';



// posts.get('/', postsCtrl.list);


const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// post collection에 데이터 삽입 
posts.post('/', postsCtrl.write);
// posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;
