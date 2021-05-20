import Post from '../../models/post';

export const write = async (ctx, next) => {
    const { title, content, tags, view, score } = ctx.request.body;
    const post = new Post({
        title,
        content,
        tags,
        view,
        score,
    });
    await post.save();
    ctx.body = post;
    await next();
    // try {
    //     await post.save();
    //     ctx.body = post;
    // } catch (e) {
    //     ctx.throw(500, e);
    // }
};

// export const read => ctx => { };
// export const remove => ctx => { };
// export const update => ctx => { };
