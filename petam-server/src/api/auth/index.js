import Router from 'koa-router'
import {write, login, read,readEmail, localRegister, localLogin, exists, logout, check} from './auth.ctrl'

const auth = new Router()

auth.post('/',write)
auth.get('/',read)
auth.get('/email/:email', readEmail)
auth.post('/login', login);
/* auth.post('/register/local', localRegister)
auth.post('/login/local', localLogin)
auth.get('/exists/:key(email|username)/:value', exists)
auth.post('/logout', logout)
auth.get('/check', check)
 */
export default auth