import Product from '../../models/product';

export const write = async (ctx) => {
  const { name, sellingPrice, price, company, discription, image } =
    ctx.request.body;

  const product = new Product({
    name,
    sellingPrice,
    price,
    company,
    discription,
    image,
  });
  try {
    await product.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = product;
};

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
export const readHospital = async (ctx) => {
  const { _id, hospitalId } = ctx.params;
  try {
    const products = await Product.findById(_id).exec();

    const product = await Product.find({
      $and: [{ hospitals: hospitalId }, { _id: _id }],
    });

    if (product.length == 0) {
      ctx.body = 0;
    } else {
      ctx.body = 1;
    }
    console.log('product:', ctx.body);
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
  const { _id, hospitalId } = ctx.params; // id로 하면 안됨.. _id로 해야 됨..
  let product;
  try {
    product = await Product.findOneAndUpdate(
      { _id: _id },
      {
        $addToSet: {
          hospitals: hospitalId,
        },
      },
    ).exec();
  } catch (e) {
    ctx.throw(500, e);
  }
  ctx.body = product;
};

export const removeHospital = async (ctx) => {
  const { _id, hospitalId } = ctx.params;
  let product;
  try {
    product = await Product.findOneAndUpdate(
      { _id: _id },
      {
        $pull: {
          hospitals: hospitalId,
        },
      },
    );
  } catch (e) {
    ctx.throw(500, e);
  }
  ctx.body = product;

};
