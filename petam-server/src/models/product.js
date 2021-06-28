//joo-ju
import mongoose from 'mongoose';
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

  enrollTime: {
    type: Date,
    default: Date.now,
  },
  deleteTime: {
    type: Date,
  },
  // deleteTime: Date,
});

// 모델 생성
const Product = mongoose.model('Product', ProductSchema);

export default Product;
