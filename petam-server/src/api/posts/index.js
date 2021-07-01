import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import Post from '../../models/post';
const posts = new Router();
posts.post('/', postsCtrl.write);

posts.get('/list', postsCtrl.list);

// posts.post('/', postsCtrl.write);

// posts.get('/', postsCtrl.list);
posts.put('/:_id', postsCtrl.update);
posts.get('/readone/:_id', postsCtrl.readOne);
// posts.post('/detail/:_id', async (req, res) => {
//   try {
//     const _id = req.body._id;
//     const post = await Post.findById({ _id });
//     console.log(post);
//     res.json({ post });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });
// post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// post collection에 데이터 삽입
// posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;
