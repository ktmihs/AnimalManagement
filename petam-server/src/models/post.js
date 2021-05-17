import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,          // 글 제목
    content: String,        // 글 내용
    view: Number,           // 조회 수
    tags: [String],         // 공지, 알림 등 - 문자열로 이루어진 배열
    score: Number,
    enrollTime: {
        type: Date,
        default: Date.now,
    },
    deleteTime: Date,

});

// 모델 생성
const Post = mongoose.model('Post', PostSchema);
export default Post;