//joo-ju
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import db from '../index';
mongoose.set('useCreateIndex', true);
autoIncrement.initialize(mongoose.connection);

const { Schema } = mongoose;

const PostSchema = new Schema({
  no: {
    type: Number,
  }, // auto increment
  title: {
    type: String,
  }, // 글 제목
  content: {
    type: String,
  }, // 글 내용
  view: {
    type: String,
  }, // 조회 수
  tags: {
    type: String,
  }, // 공지, 알림 등 - 문자열로 이루어진 배열
  score: {
    type: String,
  },
  writer: {
    type: String,
  },
  enrollTime: {
    type: Date,
    default: Date.now,
  },
  // deleteTime: Date,
});

PostSchema.plugin(autoIncrement.plugin, {
  model: 'Post',
  field: 'no',
  startAt: 1,
  increment: 1,
});

// 모델 생성
const Post = mongoose.model('Post', PostSchema);

export default Post;
