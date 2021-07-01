import Router from "koa-router"
import {write, read, readOne, update, remove, readName, filter} from "./hospitals.ctrl"

const hospitals=new Router()

hospitals.post('/',write)
hospitals.get('/read',read)
hospitals.get('/read/:filter',filter)
hospitals.get('/read/:_id',readOne)
hospitals.get('/read/name/:name',readName)
hospitals.put('/:_id',update)
//hospitals.patch('/:name',update2)
hospitals.delete('/:id',remove)

export default hospitals