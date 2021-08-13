import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.login);
auth.get('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);
auth.get('/user/:_id', authCtrl.readOne);
auth.put('/pet/:username/:pet',authCtrl.updatePet)
auth.delete('/pet/:username/:pet',authCtrl.removePet)

export default auth;
