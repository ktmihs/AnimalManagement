import Joi from 'joi';
import User from '../../models/user';

/*
  POST /api/auth/register
  {
    username: 'velopert',
    password: 'mypass123'
  }
*/
export const register = async (ctx) => {
  // Request Body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
  });
  console.log(ctx.request.body);
  const result = schema.validate(ctx.request.body);
  console.log(result);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password, name, email, phone } = ctx.request.body;
  try {
    // username  이 이미 존재하는지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      username,
      name,
      email,
      phone,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  POST /api/auth/login
  {
    username: 'velopert',
    password: 'mypass123'
  }
*/
export const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  // username, password 가 없으면 에러 처리
  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await User.findByUsername(username);
    // 계정이 존재하지 않으면 에러 처리
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/auth/check
*/
export const check = async (ctx) => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인중 아님
    ctx.status = 401; // Unauthorized
    return;
  }
  ctx.body = user;
};

/*
  POST /api/auth/logout
*/
export const logout = async (ctx) => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // No Content
};


export const read=async(ctx)=>{
  let users
  try{
      users=await User.find().exec()
  }catch(e){
      return ctx.throw(200,e)
  } 
  ctx.body=users
}
// 특정 아이디로 하나만 검색
export const readOne=async(ctx)=>{
  const _id=ctx.params
  let data
  try{
      data=await User.findById(_id).exec()
  }catch(e){
      return ctx.throw(200,e)
  }
  if(!data){
      ctx.status=404
      ctx.body={message:'data not found'}
      return
  }
  ctx.body=data
}

// 새로운 반려동물 등록
export const updatePet = async (ctx) => {
  const { username, pet } = ctx.params
  let user
  try {
    user = await User.findOneAndUpdate(
      { username: username },
      { $addToSet: {pet: pet,} }
    ).exec()
  } catch (e) {
    ctx.throw(500, e)
  }
  ctx.body = user
}

// 등록된 반려동물 삭제
export const removePet = async (ctx) => {
  const { username, pet } = ctx.params
  let user
  try {
      user = await User.findOneAndUpdate(
      { username: username },
      { $pull: {pet: pet} }
    )
  } catch (e) {
    ctx.throw(500, e)
  }
  ctx.body = user
}