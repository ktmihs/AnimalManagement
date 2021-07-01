//joo-ju
import mongoose, { isValidObjectId } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

mongoose.set('useCreateIndex', true);
autoIncrement.initialize(mongoose.connection);

const { Schema } = mongoose;
// const {
//   Types: { ObjectId },
// } = Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
  }, // 제품 이름
  sellingPrice: {
    type: Number,
  }, // 판매가
  price: {
    type: Number,
  }, // 정가
  company: {
    type: String,
  }, //제조원(제품 만드는 곳)
  no: {
    type: Number,
  }, // auto increment
  enrollTime: {
    type: Date,
    default: Date.now,
  },
  deleteTime: {
    type: Date,
  },
  discription: {
    type: String,
  },
  // deleteTime: Date,
  hospitals: [String],
  // hospitals: [
  //   {
  //     hospitalId: {
  //       // type: mongoose.Schema.Types.ObjectId,
  //       type: String,
  //     },
  //   },
  // ], // 제품별 판매하는 병원을 찾기 위해 배열형태로 저장
});
ProductSchema.plugin(autoIncrement.plugin, {
  model: 'Product',
  field: 'no',
  startAt: 1,
  increment: 1,
});

// 모델 생성
const Product = mongoose.model('Product', ProductSchema);

export default Product;
