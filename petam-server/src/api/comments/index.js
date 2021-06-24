import Router from 'koa-router';
import * as commentsCtrl from './comments.ctrl';
import Comment from '../../models/comment';

const comments = new Router();
comments.post('/', commentsCtrl.write);

comments.get('/list', commentsCtrl.list);

// posts.post('/', postsCtrl.write);

// posts.get('/', postsCtrl.list);

// comments.get('/readone/:_id', commentsCtrl.readOne);
comments.post('/detail/:_id', async (req, res) => {
  try {
    const _id = req.body._id;
    const post = await Comment.findById({ _id });
    console.log(post);
    res.json({ post });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

// post.delete('/', commentsCtrl.remove);
// post.patch('/', commentsCtrl.update);

// post collection에 데이터 삽입
// comments.use('/:id', commentsCtrl.checkObjectId, post.routes());

export default comments;
