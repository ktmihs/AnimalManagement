
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// const { Schema } = mongoose;
const HospitalSchema = new Schema({
  hashedPassword: String, //로그인 비밀번호
  username: String, //  병원 아이디
  name: {
    type: String,
  }, //병원이름
  tel: {
    type: String,
  }, //전화번호
  old_addr: {
    type: String,
  }, //지번주소
  new_addr: {
    type: String,
  }, //도로명주소
  zip_code: {
    type: String,
  }, //우편번호
  score: {
    type: Number,
    default: 0,
  }, // 총 평점
  count: {
    type: Number,
    default: 0,
  }, // 리뷰 갯수
  company_number: {
    type: String,
  }, //사업자 등록번호
  image:{
      type: String
  }, //병원 이미지
  timeList: {
    openHour: Number,
    openMinute: Number,
    closeHour: Number,
    closeMinute: Number,
    lunchOpenHour: Number,
    lunchOpenMinute: Number,
    lunchCloseHour: Number,
    lunchCloseMinute: Number,
    // openHour: { Number },
    // openMinute: { Number },
    // closeHour: { Number },
    // closeMinute: { Number },
    // lunchOpenHour: { Number },
    // lunchOpenMinute: { Number },
    // lunchCloseHour: { Number },
    // lunchCloseMinute: { Number },
  }, // 병원 운영시간, 점심시간
  reservationTime: [], //예약 정보
  products: [
    {
      productId: String,
      price: Number,
    }, // 병원에서 판매하는 제품의 ID와 판매가
  ],
});
HospitalSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

HospitalSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true / false
};

HospitalSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

HospitalSchema.methods.generateToken = function () {
  const token = jwt.sign(
    // 첫번째 파라미터엔 토큰 안에 집어넣고 싶은 데이터를 넣습니다
    {
      _id: this.id,
      company_number: this.company_number,
      username: this.username,
    },
    process.env.JWT_SECRET, // 두번째 파라미터에는 JWT 암호를 넣습니다
    {
      expiresIn: '7d', // 7일동안 유효함
    },
  );
  return token;
};

HospitalSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};
HospitalSchema.statics.findByCompany_number = function (company_number) {
  return this.findOne({ company_number });
};
const Hospital = mongoose.model('Hospital', HospitalSchema);
export default Hospital;
