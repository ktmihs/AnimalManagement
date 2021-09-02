import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();
posts.post('/', postsCtrl.write);
posts.get('/list', postsCtrl.list);
posts.put('/:_id', postsCtrl.update);
posts.get('/readone/:_id', postsCtrl.readOne);
posts.get('/read/:writer', postsCtrl.readWriter);
posts.get('/read/hospital/:hospitalName', postsCtrl.readHospital);
export default posts;
