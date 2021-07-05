import Router from "koa-router"
import {write, read, readOne, update, remove, readName, filter, updateProduct, removeProduct,} from "./hospitals.ctrl"

const hospitals = new Router();

hospitals.post('/',write)
hospitals.get('/read',read)
hospitals.get('/read/:filter',filter)
hospitals.get('/read/:_id',readOne)
hospitals.get('/read/name/:name',readName)
hospitals.put('/:_id',update)
hospitals.delete('/:id',remove)
hospitals.put('/product/:_id/:productId/:price', updateProduct);
hospitals.delete('/product/:_id/:productId', removeProduct);

export default hospitals