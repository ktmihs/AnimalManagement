//import Joi from 'Joi'
//import Account from '../../models/account'
import Auth from '../../models/auth'
import pets from '../pets'

// 로컬 회원가입
export const write=async(ctx)=>{
    const {
        username,
        email,
        password
    }=ctx.request.body

    const auth=new Auth({
        username,
        email,
        password
    })
    try{
        await auth.save()
    } catch(e){
        return ctx.throw(500,e)
    }
    ctx.body=auth
}

// 모든 회원정보 읽기
export const read=async(ctx)=>{
    let auth
    try{
        auth=await Auth.find().exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    
    ctx.body=auth
}

// 이메일로 회원정보 확인
export const readEmail=async(ctx)=>{
    const email=ctx.params
    let data
    try{
        data=await Auth.findOne(email).exec()
    }catch(e){
        return ctx.throw(200,e)
    }
    if(!data){
        data='x'
    }
    ctx.body=data
}

// 회원 정보 업데이트 (수정할 내용만 변경)
export const update=async(ctx)=>{
    const email=ctx.params
    let auth
    try{
        auth=await Auth.updateOne(email,ctx.request.body,{
            upsert: true,
            new:true
        }).exec()
    } catch(e){
        return ctx.throw(500,e)
    }
    ctx.body=auth
}

// 새로운 반려동물 등록
export const updatePet = async (ctx) => {
    const { email, pet } = ctx.params
    let auth
    try {
      auth = await Auth.findOneAndUpdate(
        { email: email },
        { $addToSet: {pet: pet,} }
      ).exec()
    } catch (e) {
      ctx.throw(500, e)
    }
    ctx.body = auth
  }

  // 등록된 반려동물 삭제
  export const removePet = async (ctx) => {
    const { email, pet } = ctx.params
    let auth
    try {
        auth = await Auth.findOneAndUpdate(
        { email: email },
        { $pull: {pet: pet} }
      )
    } catch (e) {
      ctx.throw(500, e)
    }
    ctx.body = auth
  }
/* 
export const localRegister = async (ctx) => {
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(4).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    });

    const result = Joi.validate(ctx.request.body, schema);

    // 스키마 검증 실패
    if(result.error) {
        ctx.status = 400;
        return;
    }
    /* TODO: 아이디 / 이메일 중복처리 구현 

    // 아이디 / 이메일 중복 체크
    let existing = null;
    try {
        existing = await Account.findByEmailOrUsername(ctx.request.body);
    } catch (e) {
        ctx.throw(500, e);
    }

    if(existing) {
    // 중복되는 아이디/이메일이 있을 경우
        ctx.status = 409; // Conflict
        // 어떤 값이 중복되었는지 알려줍니다
        ctx.body = {
            key: existing.email === ctx.request.body.email ? 'email' : 'username'
        };
        return;
    }

    // 계정 생성
    let account = null;
    try {
        account = await Account.localRegister(ctx.request.body);
    } catch (e) {
        ctx.throw(500, e);
    }

    let token = null;
    try {
        token = await account.generateToken();
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
    ctx.body = account.profile; // 프로필 정보로 응답합니다.
};

// 로컬 로그인
export const localLogin = async (ctx) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error) {
        ctx.status = 400; // Bad Request
        return;
    }
    const { email, password } = ctx.request.body; 

    let account = null;
    try {
        // 이메일로 계정 찾기
        account = await Account.findByEmail(email);
    } catch (e) {
        ctx.throw(500, e);
    }

    if(!account || !account.validatePassword(password)) {
    // 유저가 존재하지 않거나 || 비밀번호가 일치하지 않으면
        ctx.status = 403; // Forbidden
        return;
    }
    
    let token = null;
    try {
        token = await account.generateToken();
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
    ctx.body = account.profile // 프로필 정보로 응답합니다.

};

// 이메일 / 아이디 존재유무 확인
export const exists = async (ctx) => {
    const { key, value } = ctx.params;
    let account = null;

    try {
        // key 에 따라 findByEmail 혹은 findByUsername 을 실행합니다.
        account = await (key === 'email' ? Account.findByEmail(value) : Account.findByUsername(value));    
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = {
        exists: account !== null
    };
};

// 로그아웃
export const logout = async (ctx) => {
    ctx.cookies.set('access_token', null, {
        maxAge: 0, 
        httpOnly: true
    });
    ctx.status = 204;
};

// 현재 호그인된 유저 정보 알려줌
export const check = (ctx) => {
    const { user } = ctx.request;

    if(!user) {
        ctx.status = 403; // Forbidden
        return;
    }

    ctx.body = user.profile;
}; */