import Router from 'koa-router';
import * as commentsCtrl from './comments.ctrl';
import Comment from '../../models/comment';

const comments = new Router();
comments.post('/', commentsCtrl.write);
comments.get('/read', commentsCtrl.read);
comments.get('/read/post/:post_id', commentsCtrl.readPostId);

// comments.post('/detail/:_id', async (req, res) => {
//   try {
//     const _id = req.body._id;
//     const post = await Comment.findById({ _id });
//     console.log(post);
//     res.json({ post });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

export default comments;
