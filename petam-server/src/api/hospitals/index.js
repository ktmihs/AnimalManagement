import Router from "koa-router"
import { check, logout, write, login, read, readOne, hregister, readLast, readCompany, update, updateTime, remove, removeTime, readName, filter, updateProduct, removeProduct, readProductPrice} from "./hospitals.ctrl"

const hospitals = new Router()

hospitals.post('/', write)
hospitals.post('/hlogin', login)
hospitals.post('/hlogout', logout)
hospitals.post('/hregister', hregister)
hospitals.get('/hcheck', check)
hospitals.get('/read',read)
hospitals.get('/read/:filter',filter)
hospitals.get('/readone/:_id',readOne)
hospitals.get('/last',readLast)
hospitals.get('/read/name/:name',readName)
hospitals.get('/read/company/:company_number',readCompany)
hospitals.put('/:_id',update)
hospitals.put('/:_id/:reservationTime', updateTime)

hospitals.get('/product/price/:_id/:productId', readProductPrice);

hospitals.put('/product/:_id/:productId/:price', updateProduct)
hospitals.delete('/:_id/:reservationTime',removeTime)
hospitals.delete('/product/:_id/:productId', removeProduct)

export default hospitals
