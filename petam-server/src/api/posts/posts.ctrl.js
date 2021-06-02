import Post from '../../models/post';
import mongoose from 'mongoose';

export const write = async (ctx) => {
  const { title, content, tags, view, score } = ctx.request.body;

  // 현재 로그인 기능이 구현되어 있지 않아 임의로 작성자 명시_210601
  const writer = 'jooju';
  const post = new Post({
    title,
    content,
    tags,
    view,
    score,
    writer,
  });
  try {
    await post.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = post;
};

export const read = async (ctx) => {
  const { id } = ctx.params;

  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};
