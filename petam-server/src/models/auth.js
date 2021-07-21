import mongoose from "mongoose"
// import bcrypt from "bcrypt";
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const jwt = require('jsonwebtoken');
const {Schema} = mongoose

const AuthSchema = new Schema({
  username: {
    type: String,
  }, // 유저 이름
  email: {
    type: String,
  }, // 아이디로 쓰일 이메일
  password: {
    type: String,
  }, // 비밀번호
  image: String,
//   token: {
//     type: String,
//   },
//   tokenExp: {
//     type: Number,
//   },
  // 비밀번호
    pet:[]
        // 등록된 동물(이름으로 등록)

})

// AuthSchema.methods.comparePassword = function (plainPassword, cb) {
//   //plainPassword 1234567    암호회된 비밀번호 $2b$10$l492vQ0M4s9YUBfwYkkaZOgWHExahjWC
//   bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

// AuthSchema.methods.generateToken = function (cb) {
//   var user = this;
//   // console.log('user._id', user._id)

//   // jsonwebtoken을 이용해서 token을 생성하기
//   var token = jwt.sign(user._id.toHexString(), 'secretToken');
//   // user._id + 'secretToken' = token
//   // ->
//   // 'secretToken' -> user._id

//   user.token = token;
//   user.save(function (err, user) {
//     if (err) return cb(err);
//     cb(null, user);
//   });
// };

// AuthSchema.statics.findByToken = function (token, cb) {
//   var user = this;
//   // user._id + ''  = token
//   //토큰을 decode 한다.
//   jwt.verify(token, 'secretToken', function (err, decoded) {
//     //유저 아이디를 이용해서 유저를 찾은 다음에
//     //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
//     user.findOne({ _id: decoded, token: token }, function (err, user) {
//       if (err) return cb(err);
//       cb(null, user);
//     });
//   });
// };


const Auth=mongoose.model("Auth",AuthSchema)
export default Auth