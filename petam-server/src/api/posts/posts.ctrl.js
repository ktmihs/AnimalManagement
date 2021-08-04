import Post from '../../models/post';
import mongoose from 'mongoose';

export const write = async (ctx) => {
  const { title, content, tags, view, score, writer } = ctx.request.body;

  // 현재 로그인 기능이 구현되어 있지 않아 임의로 작성자 명시_210601
  // const writer = 'jooju';
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
    const posts = await Post.find().sort({ _id: -1 }).exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};
export const readWriter = async (ctx) => {
  const { writer } = ctx.params; // id로 하면 안됨.. _id로 해야 됨..

  try {
    const posts = await Post.find({ writer: writer }).exec();
    if (!posts) {
      ctx.status = 404;
      return;
    }
    ctx.body = posts;
    console.log();
    console.log(posts);
  } catch (e) {
    ctx.throw(500, e);
  }
};
export const update = async (ctx) => {
  const _id = ctx.params;
  let post;
  try {
    post = await Post.updateOne(_id, ctx.request.body, {
      upsert: true,
      new: true,
    }).exec();
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = post;
};
