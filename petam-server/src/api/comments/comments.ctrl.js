import Comment from '../../models/comment';

export const write = async (ctx) => {
  const { writer, content, post_id, secret } = ctx.request.body;

  const comment = new Comment({
    writer,
    content,
    post_id,
    secret,
  });
  try {
    await comment.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = comment;
};

export const readOne = async (ctx) => {
  const { _id } = ctx.params; // id로 하면 안됨.. _id로 해야 됨..

  try {
    const comments = await Comment.findById(_id).exec();
    if (!comments) {
      ctx.status = 404;
      return;
    }
    ctx.body = comments;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async (ctx) => {
  try {
    // postid로 찾아야 함
    const comments = await Comment.find().exec();
    ctx.body = comments;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const readPostId = async (ctx) => {
  const { post_id } = ctx.params;

  try {
    const comments = await Comment.find({ post_id: post_id }).exec();

    if (!comments) {
      ctx.status = 404;
      return;
    }
    ctx.body = comments;
  } catch (e) {
    ctx.throw(500, e);
  }
};
