//joo-ju
import mongoose, { isValidObjectId } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

mongoose.set('useCreateIndex', true);
autoIncrement.initialize(mongoose.connection);

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
  }, // 제품 이름
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
  hospitals: [String],
  image: {
    type:String,
  },
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
