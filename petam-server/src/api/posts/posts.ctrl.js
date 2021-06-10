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

export const readOne = async (ctx) => {
  const { _id } = ctx.params; // id로 하면 안됨.. _id로 해야 됨..

  try {
    const posts = await Post.findById(_id).exec();
    if (!posts) {
      ctx.status = 404;
      return;
    }
    ctx.body = posts;
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
