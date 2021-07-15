import Router from "koa-router"
import {write, read, readOne, readLast, readCompany, update, updateTime, remove, removeTime, readName, filter, updateProduct, removeProduct,} from "./hospitals.ctrl"

const hospitals = new Router();

hospitals.post('/',write)
hospitals.get('/read',read)
hospitals.get('/read/:filter',filter)
hospitals.get('/readone/:_id',readOne)
hospitals.get('/last',readLast)
hospitals.get('/read/name/:name',readName)
hospitals.get('/read/company/:company_number',readCompany)
hospitals.put('/:_id',update)
hospitals.put('/:_id/:reservationTime', updateTime)
hospitals.delete('/:_id/:reservationTime',removeTime)
hospitals.delete('/:id',remove)
hospitals.put('/product/:_id/:productId/:price', updateProduct);
hospitals.delete('/product/:_id/:productId', removeProduct);

export default hospitals