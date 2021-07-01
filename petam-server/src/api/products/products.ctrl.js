import Product from '../../models/product';

export const write = async (ctx) => {
  const { name, sellingPrice, price, company, discription } = ctx.request.body;

  const product = new Product({
    name,
    sellingPrice,
    price,
    company,
    discription,
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
export const readOne = async (ctx) => {
  const { _id } = ctx.params; // id로 하면 안됨.. _id로 해야 됨..

  try {
    const products = await Product.findById(_id).exec();
    if (!products) {
      ctx.status = 404;
      return;
    }
    ctx.body = products;
  } catch (e) {
    ctx.throw(500, e);
  }
};
export const read = async (ctx) => {
  try {
    const products = await Product.find().exec();
    ctx.body = products;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const updateHospital = async (ctx) => {
  // const { params } = ctx.request.body;
  const { _id, hospitalId } = ctx.params; // id로 하면 안됨.. _id로 해야 됨..
  // const { hospitalId } = ctx.params;
  let product;
  try {
    // console.log('ctx : ', ctx);
    console.log('_id: ', _id);
    console.log('hospitlaId : ', hospitalId);
    // console.log('ctx.request: ', ctx.request.body);
    // console.log('params.hospitalId : ', params.hospitalId);
    // product = await Product.updateOne(
    product = await Product.findOneAndUpdate(
      // _id,
      { _id: _id },
      {
        // $set: {
        $addToSet: {
          // $push: {
          // hospitals: hospitalId,
          hospitals: hospitalId,
        },
        // },
      },
      // { returnNewDocument: true },
    ).exec();
    // console.log(product);
  } catch (e) {
    ctx.throw(500, e);
  }
  ctx.body = product;
  console.log('ctx.body:', ctx.body);
};
