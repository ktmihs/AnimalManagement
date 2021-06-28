import Product from '../../models/product';

export const write = async (ctx) => {
  const { name, sellingPrice, price, company } = ctx.request.body;

  const product = new Product({
    name,
    sellingPrice,
    price,
    company,
  });
  try {
    await product.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = product;
};

// export const readOne = async (ctx) => {
//   const { _id } = ctx.params; // id로 하면 안됨.. _id로 해야 됨..

//   try {
//     const posts = await Post.findById(_id).exec();
//     if (!posts) {
//       ctx.status = 404;
//       return;
//     }
//     ctx.body = posts;
//   } catch (e) {
//     ctx.throw(500, e);
//   }
// };

// export const list = async (ctx) => {
//   try {
//     const posts = await Post.find().exec();
//     ctx.body = posts;
//   } catch (e) {
//     ctx.throw(500, e);
//   }
// };
