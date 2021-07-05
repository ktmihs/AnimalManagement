import Hospital from '../../models/hospital';


export const write = async (ctx) => {
  const {
    id,
    pw,
    name,
    tel,
    old_addr,
    new_addr,
    zip_code,
    score,
    count,
    businessNum,
  } = ctx.request.body;

  const hospital = new Hospital({
    id,
    pw,
    name,
    tel,
    old_addr,
    new_addr,
    zip_code,
    score,
    count,
    businessNum,
  });
  try {
    await hospital.save();
  } catch (e) {
    return ctx.throw(200, e);
  }
  ctx.body = hospital;
};

// export const write=async(ctx)=>{
//     const {
//         id,
//         pw,
//         name,
//         tel,
//         old_addr,
//         new_addr,
//         zip_code,
//         score,
//         company_number
//     }=ctx.request.body

//     const hospital=new Hospital({
//         id,
//         pw,
//         name,
//         tel,
//         old_addr,
//         new_addr,
//         zip_code,
//         score,
//         company_number
//     })
//     try{
//         await hospital.save()
//     } catch(e){
//         return ctx.throw(200,e)
//     }
//     ctx.body=hospital
// }


export const read = async (ctx) => {
  let hospitals;
  try {
    hospitals = await Hospital.find().exec();
  } catch (e) {
    return ctx.throw(200, e);
  }

  ctx.body = hospitals;
};

export const readOne = async (ctx) => {
  const id = ctx.params;
  let data;
  try {
    data = await Hospital.findById(id).exec();
  } catch (e) {
    return ctx.throw(200, e);
  }
  if (!data) {
    ctx.status = 404;
    ctx.body = { message: 'data not found' };
    return;
  }
  ctx.body = data;
};

export const readName = async (ctx) => {
  const name = ctx.params;
  let data;
  try {
    data = await Hospital.findOne(name).exec();
  } catch (e) {
    return ctx.throw(200, e);
  }
  if (!data) {
    ctx.status = 404;
    ctx.body = { message: 'data not found' };
    return;
  }
  ctx.body = data;
};

export const update = async (ctx) => {
  const _id = ctx.params;
  let hospital;
  try {
    hospital = await Hospital.updateOne(_id, ctx.request.body, {
      upsert: true,
      new: true,
    }).exec();
    console.log(hospital);
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = hospital;
};
export const update2 = async (ctx) => {
  const name = ctx.params;
  let hospital;
  try {
    hospital = await Hospital.updateOne(name, ctx.request.body, {
      upsert: true,
      new: true,
    }).exec();
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.body = hospital;
};


export const remove = async (ctx, next) => {
  const id = ctx.params;

  await Hospital.deleteOne({ _id: id });
  await next();
};

export const updateProduct = async (ctx) => {
  const { _id, productId, price } = ctx.params; // id로 하면 안됨.. _id로 해야 됨..
  let hospital;
  try {
    console.log('_id: ', _id);
    console.log('productId : ', productId);
    hospital = await Hospital.findOneAndUpdate(
      // _id,
      { _id: _id },
      {
        $addToSet: {
          products: {
            productId: productId,
            price: price,
          },
        },
      },
    ).exec();
  } catch (e) {
    ctx.throw(500, e);
  }
  ctx.body = hospital;
  console.log('ctx.body:', ctx.body);
};

export const removeProduct = async (ctx) => {
  const { _id, productId } = ctx.params;
  let hospital;
  try {
    hospital = await Hospital.findOneAndUpdate(
      { _id: _id },
      {
        $pull: {
          products: { productId: productId },
        },
      },
    );
  } catch (e) {
    ctx.throw(500, e);
  }
  ctx.body = hospital;

  console.log('ctx.body:', ctx.body);
};
