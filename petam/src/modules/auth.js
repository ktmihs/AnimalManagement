import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER'
);
const [HREGISTER, HREGISTER_SUCCESS, HREGISTER_FAILURE] =
  createRequestActionTypes('hospital/HREGISTER');

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value // 실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login /hregister
export const register = createAction(REGISTER, ({ username, password, name, email, phone }) => ({
  username,
  password,
  name,
  email,
  phone
}));
export const hregister = createAction(HREGISTER, ({ username, password, companyNumber, tel, name, newAddr, oldAddr, zipCode }) => ({
  username,
  password,
  name,
  companyNumber,
  tel, 
  newAddr,
  oldAddr,
  zipCode
}));
export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password
}));

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const hregisterSaga = createRequestSaga(HREGISTER, authAPI.hregister);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(HREGISTER, hregisterSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    phone: '',
  },
  hregister: {
    username: '',
    name: '',
    password: '',
    passwordConfirm: '',
    company_number: '',
    new_addr: '',
    tel: '',
    old_addr: '',
    zip_code: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 개인 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 개인 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 병원 회원가입 성공
    [HREGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 병원 회원가입 실패
    [HREGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
