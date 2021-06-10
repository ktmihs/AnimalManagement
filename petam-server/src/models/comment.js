//joo-ju
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import db from '../index';
mongoose.set('useCreateIndex', true);
autoIncrement.initialize(mongoose.connection);

const { Schema } = mongoose;

const CommentSchema = new Schema({
  writer: {
    type: String,
  }, // 댓글 작성자
  content: {
    type: String,
  }, // 댓글 내용
  secret: {
    type: Number,
  }, // 비밀댓글 or 공개댓글
  post_id: {
    type: String,
  }, // 댓글 단 post _id
  enrollTime: {
    type: Date,
    default: Date.now,
  },
  deleteTime: {
    type: Date,
    // default: Date.now,
  },
});

// 모델 생성
const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
