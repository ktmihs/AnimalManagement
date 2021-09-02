import Router from 'koa-router';
import * as commentsCtrl from './comments.ctrl';

const comments = new Router();
comments.post('/', commentsCtrl.write);
comments.get('/read', commentsCtrl.read);
comments.get('/read/post/:post_id', commentsCtrl.readPostId);

export default comments;
